import './Navbar.scss';
import { useState } from 'react';

export const sections = [
    "Current Weather",
    "Daily Weather",
    "Weekly Weather",
    "About",
];



export default function NavBar() {
    const [sectionNumber, setSection]: [number, any] = useState(0)
    
    return (
        <section className="container">
            <nav>
                <section>
                    <h2>{getSectionText(sectionNumber-1)}</h2>
                    <h1>{getSectionText(sectionNumber)}</h1>
                    <h2>{getSectionText(sectionNumber+1)}</h2>
                </section>
                <header><span className="color-dark-green">Beautiful Weather</span></header>
            </nav>
        </section>
    
        
        
    );
}

const getSectionText = (sectionNumber: number): string => sections[sectionNumber % sections.length] 
