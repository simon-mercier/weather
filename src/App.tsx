import './App.scss';
import CurrentWeather from './components/current-weather/CurrentWeather';
import NavBar from './components/nav-bar/NavBar';
import './components/nav-bar/NavBar.tsx'

function App() {
    return (
        <div>
            <NavBar />
            <CurrentWeather />
        </div>
        
    );
}

export default App;
