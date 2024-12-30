import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import WeatherComponent from './Components/Weather/WeatherComponent.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/weather" element={<WeatherComponent />} />
            </Routes>
        </Router>
    );
};

export default App;
