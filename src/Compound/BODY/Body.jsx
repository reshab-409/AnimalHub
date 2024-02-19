import React from 'react';
import '../../Compound/BODY/Body.css';
import '../../Compound/BODY/Body-Responsive.css';
import '../../Compound/BODY/ScrollBar.css';
import About from './About';
import Card from './Card';
import Card2 from './Card2';
import PetCare from './PetCare';

function App() {
    return (
        <div>
            {/* Website Medical Part */}
            <Card />
            {/* About Us */}
            <About />
            {/* Website Shopping Section */}
            <Card2 />
            {/* Website Find Best Pet Care Section */}
            <PetCare />
        </div>
    );
}
export default App;