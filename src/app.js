import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // On garde seulement Router ici
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Houses from "./pages/Houses.jsx"
import Error404 from "./pages/Error-404.jsx";
import "./app.css";
import "./styles/home.css";

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/houses" element={<Houses/>} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </div>
            <footer/>
        </Router>
    );
}

export default App;

