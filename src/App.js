import React from 'react'
import Navbar from './components/Navbar'
import "./app.css"
import Banner from './components/Banner';


function App() {
    return (
        <div>
            <Navbar />
            <Banner title="Chez vous, partout et ailleurs" />
        </div>
    );
}

export default App;

