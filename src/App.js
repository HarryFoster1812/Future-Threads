import './App.css';
import Filter from './home/filter.jsx';
import React, { useState, useEffect } from 'react';
import Event from './timeline/Event';
import LoadMoreButton from './timeline/LoadMoreButton';

const App = () => {
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

            <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
                <header className="bg-gray-800 text-white text-xl text-center py-4">
                    <h1>Student Hack 2025 Timeline</h1>
                </header>

                <div className="timeline relative max-w-5xl mx-auto py-8">
                    <div className="timeline-line absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-800"></div>
                    {events.map((event, index) => (
                        <Event key={index} event={event} side={index % 2 === 0 ? 'left' : 'right'} />
                    ))}
                </div>

                <LoadMoreButton onClick={loadEvents} />

                <footer className="bg-gray-800 text-white text-center py-4">
                    <p>&copy; 2025 Student Hack. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
