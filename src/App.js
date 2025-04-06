import './App.css' 
import Home from './pages/Home/Home'
import Event from './pages/Event/EventInformation'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Test from "./pages/apiTest/test";
import NoPage from "./pages/NoPage/NoPage";
import GameUI from "./pages/Game/GameUI";
import TimeLine from "./pages/TimeLine/TimeLine";
import AddEventForm from './pages/newEvent/EventAdd';
import GameEnd from './pages/gameEnd/gameEnd';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="event/:info" element={<Event/>}/>
                    <Route path="test" element={<Test/>}/>
                    <Route path="newEvent" element={<AddEventForm/>}/>
                    <Route path="newCard" element={<Test/>}/>
                    <Route path="timeline" element={<TimeLine/>}/>
                    <Route path="game" element={<GameUI />} />
                    <Route path="gameEnd" element={<GameEnd />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );

}
export default App
