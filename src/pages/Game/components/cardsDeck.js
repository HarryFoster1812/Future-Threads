import './cardsDeck.css';

export default function cardsDeck({ cards, onCardClick, selectedCardId }) {
  return (
    <div className="cards-deck-container">
      <div className="cards-deck">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCardId === card.id ? 'selected' : ''} ${
              selectedCardId && selectedCardId !== card.id ? 'fade-out' : ''
            }`}
            onClick={() => onCardClick(card)}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="card-effects">
              {Object.entries(card.effects).map(([stat, value]) => (
                <span
                  key={stat}
                  className={`effect ${value > 0 ? 'positive' : 'negative'}`}
                >
                  {stat}: {value > 0 ? `+${value}` : value}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}