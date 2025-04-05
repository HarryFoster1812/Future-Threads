import Filter from './filter/filter.jsx';
import React, { useState, useEffect } from 'react';
import Event from './timeline/Event';
import LoadMoreButton from './timeline/LoadMoreButton';

const getEntryDate = (entry, optimism) => {
    for (let optimismRange of entry["optimism"]) {
        if (optimismRange["lowerBound"] <= optimism && optimism <= optimismRange["upperBound"]) {
            let range = (optimismRange["upperBound"]-optimismRange["lowerBound"]);
            let terp = (optimism-optimismRange["lowerBound"])/range;
            if (entry["isPositive"]) {
                terp = 1-terp;
            }
            let year = entry["dateRange"]["earliestYear"]+terp*(entry["dateRange"]["latestYear"]-entry["dateRange"]["earliestYear"])
            return Math.round(year);
        }
    }
    return null
}

const getJson = (relevanceMinimum, tags, optimism) => {
    return fetch('timeline_data/timeline_data.json')
        .then(response => response.json())
        .then(data => {
            let output = [];
            for (let entry of data) {
                let year = getEntryDate(entry, optimism);
                if (entry["relevance"] >= relevanceMinimum &&
                    (entry["tags"].some(tag => tags.includes(tag)) || tags.includes("All")) &&
                    year !== null) {
                    output.push({
                        title: entry["title"],
                        date: year,
                        image: "images/"+entry["image"],
                        url: entry["source"].length>0 ? entry["source"][0] : null,
                        content: entry["description"],
                    })
                }
            }
            output.sort((a, b) => a.date-b.date);
            console.log('all events',output)
            return output;
        })
}

const TimeLine = () => {
    const [events, setEvents] = useState([]);
    const [loadedEvents, setLoadedEvents] = useState(0);
    const [allEvents, setAllEvents] = useState([]);
    const [showMoreButton, setShowMoreButton] = useState(true);
    const eventsPerLoad = 3;


    useEffect(() => {
        const fetchData = async () => {
            const result = await getJson(0, ["All"], 0.8);
            setAllEvents(result);
            setEvents(result.slice(0, eventsPerLoad));
            setLoadedEvents(eventsPerLoad);
        };

        fetchData();
    }, []);

    const loadEvents = () => {
        setEvents((prevEvents) => [
            ...prevEvents,
            ...allEvents.slice(loadedEvents, loadedEvents + eventsPerLoad),
        ]);
        setLoadedEvents(loadedEvents + eventsPerLoad);

        console.log(allEvents.length);
        if(loadedEvents >= allEvents.length && allEvents.length !== 0){
            setShowMoreButton(false);
        }
    };

    useEffect(() => {
        loadEvents();
    });


    return (
        <div className="flex items-center justify-center flex-col bg-black p-4">
            <Filter/>

            {/* Timeline Container */}
            <div className="relative w-full md:w-2/3">
                {/* Vertical Timeline Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full z-0"></div>

                {events.map((event, index) => (
                    <Event key={index} event={event} side={index % 2 === 0 ? 'left' : 'right'} />
                ))}
            </div>

            {showMoreButton && <LoadMoreButton onClick={loadEvents} />}

        </div>
    );

}

export default TimeLine;
