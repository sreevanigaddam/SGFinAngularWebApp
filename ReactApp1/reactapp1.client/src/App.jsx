import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import WeatherComponent from './Components/Weather/WeatherComponent.jsx';
import Navigation from './Components/navigation.jsx';
import Home from './Components/home.jsx';
import { useState } from 'react';

import Currency from './Components/currency.jsx';
import Rates from './Components/rates.jsx';


const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                {isAuthenticated && (
                    <Route path="/" element={<Navigation />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/navigation" element={<Navigation />} />
                        <Route path="/weather" element={<WeatherComponent />} />
                        <Route path="/currency" element={<Currency/>} />
                        <Route path="/rates" element={<Rates/>} />
                    </Route>
                )}
            </Routes>
        </Router>
    );
};

export default App;



