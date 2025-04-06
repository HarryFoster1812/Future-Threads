import React from 'react';

const EventWithText = ({ event, side, text }) => {
    console.log("EVENT:", event);
    return (
        <>
            <div className={`event relative flex ${side === 'left' ? 'justify-start' : 'justify-end'} w-full py-12 text-black`}>
                {/* Event Content */}
                <a
                    href={event.url || '#'} // Use the event URL or a placeholder if no URL is provided
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`event-content bg-white p-6 rounded-lg shadow-lg w-7/12 md:w-1/2 ${ side === 'left' ? 'mr-6' : 'ml-6' } hover:shadow-xl transition-shadow duration-300`}
                >
                    <h2 className="text-2xl font-bold">{event.title}</h2>
                    {event.image && <img src={"images/"+event.image} alt={event.title} className="my-6 w-full rounded-lg" />}
                    <p className="text-lg">{event.content}</p>
                    <small className="text-2xl font-bold text-gray-700 mt-4 block">{event.date}</small>
                </a>

                {/* Circle indicator */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white border-4 border-orange-500 rounded-full w-8 h-8 z-20"></div>
            </div>
            <div className={`event relative flex ${side === 'left' ? 'justify-end' : 'justify-start'} w-full py-12`}>
                <p>{event.description}</p>
            </div>
        </>
    );
};

export default EventWithText;


