import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameEnd = () => {
 return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-red-700">
      <h1 className="text-6xl font-bold mb-8">GAME END</h1>
      <a 
        className="px-6 py-3 bg-yellow-400 text-black rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-300 mb-4"
        href="/game"
      >
    Play Again      </a>
    </div>
  );
};



export default GameEnd;



