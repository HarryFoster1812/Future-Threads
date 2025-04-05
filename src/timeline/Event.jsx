import React from 'react';

const Event = ({ event, side }) => {
  return (
    <div className={`event relative flex ${side === 'left' ? 'justify-start' : 'justify-end'} w-11/12 md:w-1/2 mx-auto py-4`}>
      <div className="event-content bg-white p-4 rounded-lg shadow-lg w-full">
        <h2 className="text-xl font-semibold">{event.title}</h2>
        {event.image && <img src={event.image} alt={event.title} className="my-4 w-full rounded-lg" />}
        <p>{event.content}</p>
        {event.url && (
          <p>
            <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-orange-500 underline">
              Read more
            </a>
          </p>
        )}
        <small className="text-gray-500">{event.date}</small>
      </div>
      <div
        className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} transform -translate-x-1/2 bg-white border-4 border-orange-500 rounded-full w-6 h-6 z-10`}
      ></div>
    </div>
  );
};

export default Event;
