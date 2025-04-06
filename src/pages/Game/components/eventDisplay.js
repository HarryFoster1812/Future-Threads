import "./eventDisplay.css";
import React, {useEffect, useRef} from  "react";
import EventWithText from './EventWithText';

const EventDisplay = ({eventsOccured})=> {
    const divref = useRef(null);

    const scrollToBottom = () => {
        divref.current?.scrollIntoView({behavior: "smooth"});

    }

    useEffect(()=>{
        scrollToBottom()
    }, [eventsOccured])

  return (
    <div className="event-display">
            {eventsOccured.map((event, index) => (
                    <EventWithText key={index} event={event} side={index % 7 === 0 ? 'left' : 'right'} />
            ))}
            <div ref={divref}/>

    </div>
  );
}

export default EventDisplay;
