import React from 'react';
import Banner from "../components/Banner.jsx";
import Gallery from "../components/Gallery.jsx";

function Home() {
    return (
        <div>
            <Banner title="Chez vous, partout et ailleurs" />
            <Gallery />
        </div>
    );
}

export default Home;
