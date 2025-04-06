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

        async function getData() {
            try {
                const returnJson = await axios.post(
                    "http://localhost:5000/api/incYear",
                    { selectedCard: JSON.stringify(card) },
                    { withCredentials: true }
                );


                const statsQueue = returnJson.data.content.stats.slice(1);
                const initialStats = returnJson.data.content.stats[0];
                const eventQueue = returnJson.data.content.events; // assuming 1 event at a time for now

                console.log(statsQueue)
                console.log(initialStats)
                console.log(eventQueue)
                setCurrentEvent(returnJson.data.content);
                setStats(initialStats);
                setSelectedCard(null);

                runStatAnimation(statsQueue, eventQueue);
            } catch (err) {
                console.error("Error fetching card data:", err);
            }
        }

        function runStatAnimation(statsQueue, eventQueue) {
            if (statsQueue.length === 0) return;

            let index = 0;

            const handleEventUpdate = (eventIndex) => {
                // Check if we are adding the first event or subsequent events
                if (index === 0) {
                    setEventsHappened([eventQueue[eventIndex]]);
                    console.log("FIRST EVENT:", eventQueue[eventIndex]);
                } else {
                    setEventsHappened((prev) => [...prev, eventQueue[eventIndex]]);
                }
            };

            function step() {
                setStats(statsQueue[index]);

                handleEventUpdate(index);

                index++;

                if (index < statsQueue.length) {
                    setTimeout(step, 1000); // Adjust timeout duration as needed
                }
            }

            step();
        }

        getData();
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
