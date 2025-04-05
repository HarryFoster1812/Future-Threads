import './App.css';
import Filter from './home/filter.jsx';

function App() {
  return (
    <div className="flex items-center justify-center flex-col bg-black p-4">
            <Filter/>
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-white">Hello</p>
            </div>
            <div className="min-h-screen">
                <p className="text-white">Hello</p>
            </div>
    </div>
  );
}

export default App;
