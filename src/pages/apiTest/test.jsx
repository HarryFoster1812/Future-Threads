import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
    const [messages, setMessages] =  useState([]);

const handleSendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/filteredEvents');
    console.log(response);
    } catch (error) {
            console.log(error)
    }
  };

  // Call the function when the component mounts or when 'info' changes
  useEffect(() => {
    handleSendMessage();
  }, []);

    return (
        <div className="flex items-center justify-center flex-col bg-black p-4">
    
        </div>
    );

}

export default Test;
