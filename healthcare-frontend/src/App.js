import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 600,
        },
        h3: {
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 8,
    },
});

function App() {
    return ( <
        ThemeProvider theme = { theme } >
        <
        CssBaseline / >
        <
        Router >
        <
        Box sx = {
            { display: 'flex', flexDirection: 'column', minHeight: '100vh' } } >
        <
        Navbar / >
        <
        Box component = "main"
        sx = {
            { flexGrow: 1 } } >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/chat"
        element = { < Chatbot / > }
        /> <
        Route path = "/doctors"
        element = { < Doctors / > }
        /> <
        Route path = "/services"
        element = { < Services / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> <
        /Routes> <
        /Box> <
        Footer / >
        <
        /Box> <
        /Router> <
        /ThemeProvider>
    );
}

export default App;