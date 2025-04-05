import React from 'react';

const Event = ({ event, index }) => {
    const side = index % 2 === 0 ? 'left' : 'right';

    return (
        <div className="flex items-center justify-center">
            <div className="event-content">
                <h2>{event.title}</h2>
                {event.image && (
                    <img
                        src={event.image}
                        alt={event.title}
                        style={{ maxWidth: '100%', marginBottom: '1rem' }}
                    />
                )}
                <p>{event.content}</p>
                {event.url && (
                    <p>
                        <a
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block my-8 text-center text-xl text-blue-600 hover:underline"
                        >
                            Read more
                        </a>
                    </p>
                )}
                <small>{event.date}</small>
            </div>
        </div>
    );
};

export default Event;
