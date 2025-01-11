import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is already logged in
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (username, password) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { username, password });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                setIsAuthenticated(true);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Login error', error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };