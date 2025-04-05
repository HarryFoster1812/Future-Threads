import React {useEffect} from 'react'
import { useParams } from 'react-router-dom'

const EventInformation = () => {
    const {info}= useParams()
    console.log("Event param details",info)
    useEffect(()=>{

    }, []);
  return (
    <div className="text-white p-4 text-center text-9xl">
      Event - {info}
    </div>
  );
}

export default EventInformation;
