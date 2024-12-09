import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // On garde seulement Router ici
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
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
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

