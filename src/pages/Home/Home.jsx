import Filter from './filter/filter.jsx';
import React, { useState, useEffect } from 'react';
import Event from './timeline/Event';
import LoadMoreButton from './timeline/LoadMoreButton';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [loadedEvents, setLoadedEvents] = useState(0);
    const eventsPerLoad = 6;

    const allEvents = Array.from({ length: 100 }, (_, i) => ({
        title: `Event Title ${i + 1}`,
        date: `2025-0${(i % 12) + 1}-01`,
        image: i % 3 === 0 ? `https://via.placeholder.com/150?text=Event+${i + 1}` : null,
        url: i % 4 === 0 ? `https://example.com/event-${i + 1}` : null,
        content: `Description for event ${i + 1}. Lorem ipsum dolor sit amet...`,
    }));

    const loadEvents = () => {
        setEvents((prevEvents) => [
            ...prevEvents,
            ...allEvents.slice(loadedEvents, loadedEvents + eventsPerLoad),
        ]);
        setLoadedEvents(loadedEvents + eventsPerLoad);
    };

    useEffect(() => {
        loadEvents();
    }, []);

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

            <LoadMoreButton onClick={loadEvents} />

        </div>
    );
}

export default Home;
