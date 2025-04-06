import { useState, useEffect } from 'react';
import StatsBar from './components/statsBar';
import EventDisplay from './components/eventDisplay';
import CardsDeck from './components/cardsDeck';
import RandomEventPopup from './components/randomEventPopup';
import axios from "axios";

function GameUI() {
  // Game state
  const [stats, setStats] = useState({
    military: 50,
    politics: 50,
    environment: 50,
    qualityOfLife: 50,
    economy: 50,
  });

  const [currentEvent, setCurrentEvent] = useState();
  const [selectedCard, setSelectedCard] = useState({});
  const [eventsHappened, setEventsHappened] = useState([]);

    useEffect(()=> {
        async function getData(){
            const initData = await axios.post('http://localhost:5000/api/newGame', {}, { withCredentials: true });

            setCurrentEvent(initData.data.content);
            setStats(initData.data.content.stats);
        }
        getData();
    }, [])

  const handleCardClick = (card) => {
    setSelectedCard(card);
    console.log("SELECTED CARD:", card);
    
    // Animate stat changes after delay
        async function getData(){
            const returnJson = await axios.post("http://localhost:5000/api/incYear", {selectedCard: JSON.stringify(card)}, { withCredentials: true });

            console.log("CARD SELECT DATA:", returnJson);
            setCurrentEvent(returnJson.data.content);
            setStats(returnJson.data.content.stats);
            // setCurrentEvent();
            // setEventsHappened((prev) => [...prev, currentEvent]);
        }

        getData();


        //setSelectedCard(null);
  };

  return (
    <div className="game-container">
      <StatsBar stats={stats} />
      <EventDisplay eventsOccured={eventsHappened} />
      
      {currentEvent && (
        <CardsDeck 
          cards={currentEvent.cards} 
          onCardClick={handleCardClick} 
          selectedCardId={selectedCard?.id} 
        />
      )}

        {/* : (
        <RandomEventPopup 
          event={randomEvent} 
          onClose={() => setRandomEvent(null)} 
        />
      )*/}
    </div>
  );
}

export default GameUI;
