import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Gallery from './components/Gallery.jsx';
import Home from './pages/home.js';
import About from './pages/about.js';
import './app.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Banner title="Chez vous, partout et ailleurs" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Gallery />
            </div>
        </Router>
    );
}

export default App;

