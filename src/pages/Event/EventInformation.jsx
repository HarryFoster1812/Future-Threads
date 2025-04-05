import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const EventInformation = () => {
  const { info } = useParams();
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (!info?.trim()) return;

    const userMessage = { role: 'user', content: info };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: info,
      });

      const botMessage = { role: 'assistant', content: response.data.content };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling backend API:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Try again!' },
      ]);
    }
  };

  // Call the function when the component mounts or when 'info' changes
  useEffect(() => {
    handleSendMessage();
  });

  return (
    <div className="text-white p-4 text-center">
      <h1 className="text-4xl mb-4">Event - {info}</h1>
      <ul className="text-lg space-y-2">
        {messages.map((message, index) => (
          <li key={index} className={message.role === 'user' ? 'text-blue-400' : 'text-green-400'}>
            <strong>{message.role}:</strong> {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default EventInformation;
