import './App.scss';
import CurrentWeather from './components/current-weather/CurrentWeather';
import NavBar from './components/nav-bar/Navbar';
import './components/nav-bar/Navbar.tsx'
import Location from './components/location/Location';

function App() {
    return (
        <div>
            <NavBar />
            <CurrentWeather />
            <Location />
        </div>
        
    );
}

export default App;
