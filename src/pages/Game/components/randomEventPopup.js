import "./randomEventPopup.css";

export default function randomEventPopup({ event, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{event}</p>
        <button onClick={onClose}>Continue</button>
      </div>
    </div>
  );
}