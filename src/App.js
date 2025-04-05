import './App.css' 
import Home from './pages/Home/Home'
import Event from './pages/Event/EventInformation'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage/NoPage";

<<<<<<< HEAD
const getEntryDate = (entry, optimism) => {
    for (let optimismRange of entry["optimism"]) {
        if (optimismRange["lowerBound"] <= optimism && optimism <= optimismRange["upperBound"]) {
            let range = (optimismRange["upperBound"]-optimismRange["lowerBound"]);
            let terp = (optimism-optimismRange["lowerBound"])/range;
            if (entry["isPositive"]) {
                terp = 1-terp;
            }
            let year = entry["dateRange"]["earliestYear"]+terp*(entry["dateRange"]["latestYear"]-entry["dateRange"]["earliestYear"])
            return Math.round(year);
        }
    }
    return null
}
const getJson = (relevanceMinimum, tags, optimism) => {
    return fetch('timeline_data/timeline_data.json')
        .then(response => response.json())
        .then(data => {
            let output = [];
            for (let entry of data) {
                let year = getEntryDate(entry, optimism);
                if (entry["relevance"] >= relevanceMinimum &&
                    (entry["tags"].some(tag => tags.includes(tag)) || tags.includes("All")) &&
                    year !== null) {
                    output.push({
                        title: entry["title"],
                        date: year,
                        image: "images/"+entry["image"],
                        url: entry["source"].length>0 ? entry["source"][0] : null,
                        content: entry["description"],
                    })
                }
            }
            output.sort((a, b) => a.date-b.date);
            console.log('all events',output)
            return output;
        })
}

const App = () => {
    const [events, setEvents] = useState([]);
    const [loadedEvents, setLoadedEvents] = useState(0);
    const [allEvents, setAllEvents] = useState([]);
    const eventsPerLoad = 20;

    useEffect(() => {
        const fetchData = async () => {
            const result = await getJson(0, ["All"], 0.8);
            setAllEvents(result);
            setEvents(result.slice(0, eventsPerLoad));
            setLoadedEvents(eventsPerLoad);
        };

        fetchData();
    }, []);

    const loadEvents = () => {
        setEvents((prevEvents) => [
            ...prevEvents,
            ...allEvents.slice(loadedEvents, loadedEvents + eventsPerLoad),
        ]);
        setLoadedEvents(loadedEvents + eventsPerLoad);
    };

    useEffect(() => {
        loadEvents();
    }, []);
=======
function App() {
>>>>>>> dynamicPage

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

