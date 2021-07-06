import './App.scss';
import CurrentWeather from './components/current-weather/CurrentWeather';
import NavBar from './components/nav-bar/Navbar';
import './components/nav-bar/Navbar.tsx'

function App() {
    return (
        <div>
            <NavBar />
            <CurrentWeather />
        </div>
        
    );
}

export default App;
