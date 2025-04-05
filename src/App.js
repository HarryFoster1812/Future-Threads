/*
import './App.css' 
import Home from './pages/Home/Home'
import Event from './pages/Event/EventInformation'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage/NoPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="event/:info" element={<Event/>}/>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );

}
export default App
*/
import { useState } from 'react';
import StatsBar from './pages/Game/components/statsBar';
import EventDisplay from './pages/Game/components/eventDisplay';
import CardsDeck from './pages/Game/components/cardsDeck';
import RandomEventPopup from './pages/Game/components/randomEventPopup';
import { gameEvents } from './data/gameEvents';
import './App.css';

function App() {
  // Game state
  const [stats, setStats] = useState({
    military: 50,
    politics: 50,
    environment: 50,
    qualityOfLife: 50,
    economy: 50,
  });

  const [currentEvent, setCurrentEvent] = useState(gameEvents[0]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [randomEvent, setRandomEvent] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    
    // Animate stat changes after delay
    setTimeout(() => {
      setStats(prev => {
        const newStats = { ...prev };
        Object.keys(card.effects).forEach(stat => {
          newStats[stat] = Math.max(0, Math.min(100, prev[stat] + card.effects[stat]));
        });
        return newStats;
      });

      // Trigger random event
      setTimeout(() => {
        setRandomEvent("Citizens react to your decision!");
        // Load next random event
        setCurrentEvent(gameEvents[Math.floor(Math.random() * gameEvents.length)]);
        setSelectedCard(null);
      }, 1000);
    }, 500);
  };

  return (
    <div className="game-container">
      <StatsBar stats={stats} />
      <EventDisplay text={currentEvent.text} />
      
      {!randomEvent ? (
        <CardsDeck 
          cards={currentEvent.cards} 
          onCardClick={handleCardClick} 
          selectedCardId={selectedCard?.id} 
        />
      ) : (
        <RandomEventPopup 
          event={randomEvent} 
          onClose={() => setRandomEvent(null)} 
        />
      )}
    </div>
  );
}

export default App;