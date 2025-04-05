import "./eventDisplay.css";

export default function eventDisplay({ text }) {
  return (
    <div className="event-display">
      <div className="event-text">{text}</div>
    </div>
  );
}