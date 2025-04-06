import React from 'react';

const EventWithText = ({ event, side, text }) => {
    console.log("EVENT:", event);
    return (
        <>
            <div className={`event relative flex justify-center items-center w-full py-12 text-black basis-3/5`}>
                {/* Event Content */}
                <a
                    href={event.url || '#'} // Use the event URL or a placeholder if no URL is provided
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`event-content bg-white p-6 rounded-lg shadow-lg  hover:shadow-xl transition-shadow duration-300`}
                >
                    <h2 className="text-2xl font-bold">{event.title}</h2>
                    {event.image && <img src={"images/"+event.image} alt={event.title} className="my-6 w-full rounded-lg" />}
                    <p className="text-lg">{event.content}</p>
                </a>

            </div>
            <div className={`event relative flex justify-center items-center w-full px-4 basis-2/5`}>
                <p>{event.description}</p>
            </div>
        </>
    );
};

export default EventWithText;


