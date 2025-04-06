import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventInformation = () => {
  const { info } = useParams();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false); // State to track if AI is generating

  const handleSendMessage = async () => {
    if (!info?.trim()) return;

    const event_info = JSON.parse(decodeURI(info));
    setLoading(true); // Set loading to true when starting to fetch data

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: `Generate an article about a future event entitled ${info.title}. Here is all of the information we have on the event in json format ${info}. Please describe how likely this is to happen and be descriptive when talking about the event.`,
      });

      const botMessage = { role: 'assistant', content: response.data.content };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling backend API:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Try again!' },
      ]);
    } finally {
      setLoading(false); // Set loading to false once the response is received
    }
  };

  // Call the function when 'info' changes
  useEffect(() => {
    if (info) {
      handleSendMessage();
    }
  }, [info]); // Only run when 'info' changes

  return (
    <div className="text-white p-4 text-center">
      <h1 className="text-4xl mb-4">Event - {JSON.parse(decodeURI(info)).title}</h1>

      {/* Show the loading spinner if loading is true */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid border-blue-400 border-t-transparent rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ul className="text-lg space-y-2">
          {messages.map((message, index) => (
            <li key={index}>
              {message.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventInformation;

