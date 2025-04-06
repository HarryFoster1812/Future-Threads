
import React from 'react';

const Home = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-6xl font-bold mb-8">Future Threads</h1>
      <a 
        className="px-6 py-3 bg-yellow-400 text-black rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-300 mb-4"
        href="/game"
      >
        Start Game
      </a>
      <div className="flex gap-4">
        <a 
          className="px-6 py-3 bg-green-400 text-black rounded-lg text-lg font-semibold hover:bg-green-500 transition duration-300"
          href="/newEvent"
        >
          Add New Event
        </a>
        <a 
          className="px-6 py-3 bg-blue-400 text-black rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300"
          href="/newCard"
        >
          Add New Action Card
        </a>
      </div>
    </div>
  );
};

export default Home;

