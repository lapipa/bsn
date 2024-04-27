import './App.css';
import Navbar from './components/navbar/Navbar';
import TodaysGame from './pages/TodaysGame';

function App() {
  return (
    <div className="App">
        <Navbar />
        <TodaysGame/>
    </div>
  );
}

export default App;
