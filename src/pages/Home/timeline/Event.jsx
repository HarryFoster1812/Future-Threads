import React from 'react';

const Event = ({ event, side }) => {
  return (
    <div className={`event relative flex ${side === 'left' ? 'justify-start' : 'justify-end'} w-full py-12`}>
      {/* Event Content */}
      <div className="event-content bg-white p-6 rounded-lg shadow-lg w-7/12 md:w-1/2">
        <h2 className="text-2xl font-bold">{event.title}</h2>
        {event.image && <img src={event.image} alt={event.title} className="my-6 w-full rounded-lg" />}
        <p className="text-lg">{event.content}</p>
        {event.url && (
          <p>
            <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-orange-500 underline text-lg">
              Read more
            </a>
          </p>
        )}
        {/* Date inside the event content */}
        <small className="text-2xl font-bold text-gray-700 mt-4 block">{event.date}</small>
      </div>

      {/* Circle indicator */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white border-4 border-orange-500 rounded-full w-8 h-8 z-20"></div>
    </div>
  );
};

export default Event;


