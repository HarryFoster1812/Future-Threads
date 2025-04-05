import { useState } from 'react';
import StatsBar from './components/statsBar';
import EventDisplay from './components/eventDisplay';
import CardsDeck from './components/cardsDeck';
import RandomEventPopup from './components/randomEventPopup';
import { gameEvents } from '../../data/gameEvents';

function GameUI() {
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
  const [eventsHappened, setEventsHappened] = useState([]);

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
        setEventsHappened((prev) => [...prev, currentEvent]);
        setSelectedCard(null);
      }, 1000);
    }, 500);
  };

  return (
    <div className="game-container">
      <StatsBar stats={stats} />
      <EventDisplay eventsOccured={eventsHappened} />
      
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

export default GameUI;
