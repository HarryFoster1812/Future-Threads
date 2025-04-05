import { useState } from "react";
import StatsBar from './components/statsBar';
import EventDisplay from './components/eventDisplay';
import CardsDeck from './components/cardsDeck';
import RandomEventPopup from './components/randomEventPopup';
import { gameEvents } from '../../data/gameEvents';
import './Game.css';

export default function Game() {
    const [stats, setStats] = useState({
        military: 50,
        politics: 50,
        environment: 50,
        qualityOfLife: 50,
        economy: 50,
    });

    const handleSendMessage = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/filteredEvents');
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
    
    })

    const [currentEvent, setCurrentEvent] = useState();
    const [selectedCard, setSelectedCard] = useState(null);
    const [randomEvent, setRandomEvent] = useState(null);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        
        setTimeout(() => {
            setStats(prev => {
                const newStats = { ...prev };
                Object.keys(card.effects).forEach(stat => {
                    newStats[stat] = Math.max(0, Math.min(100, prev[stat] + card.effects[stat]));
                });
                return newStats;
            });

            setTimeout(() => {
                setRandomEvent("Citizens react to your decision!");
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
