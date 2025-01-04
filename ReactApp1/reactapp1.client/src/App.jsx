import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthProvider, AuthContext } from './Components/AuthContext.jsx';

import Navigation from './Components/navigation.jsx';
import Home from './Components/home.jsx';
import Login from './components/login.jsx';
import Currency from './Components/currency.jsx';
import Rates from './Components/rates.jsx';
import PropTypes from 'prop-types';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="/currency" element={<PrivateRoute><Currency /></PrivateRoute>} />
                    <Route path="/rates" element={<PrivateRoute><Rates /></PrivateRoute>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? (
        <>
            <Navigation />
            {children}
        </>
    ) : (
        <Navigate to="/" />
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default App;




