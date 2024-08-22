import React, { useEffect, useState } from "react";
import deskbg from "../assets/destination/background-destination-desktop.jpg";
import mobbg from "../assets/destination/background-destination-mobile.jpg";
import Moonpng from '../assets/destination/image-moon.png';
import Marspng from '../assets/destination/image-mars.png';
import Europapng from '../assets/destination/image-europa.png';
import titanpng from '../assets/destination/image-titan.png';
import Moonwebp from '../assets/destination/image-moon.webp';
import Marswebp from '../assets/destination/image-mars.webp';
import Europawebp from '../assets/destination/image-europa.webp';
import Titanwebp from '../assets/destination/image-titan.webp';

export default function Destination() {

    const data = [
        {
            "name": "Moon",
            "images": {
                "png": `${Moonpng}`,
                "webp": `${Moonwebp}`
            },
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            "distance": "384,400 km",
            "travel": "3 days"
        },
        {
            "name": "Mars",
            "images": {
                "png": `${Marspng}`,
                "webp": `${Marswebp}`
            },
            "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            "distance": "225 mil. km",
            "travel": "9 months"
        },
        {
            "name": "Europa",
            "images": {
                "png": `${Europapng}`,
                "webp": `${Europawebp}`
            },
            "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            "distance": "628 mil. km",
            "travel": "3 years"
        },
        {
            "name": "Titan",
            "images": {
                "png": `${titanpng}`,
                "webp": `${Titanwebp}`
            },
            "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            "distance": "1.6 bil. km",
            "travel": "7 years"
        }
    ]

    const [bgimg, setBgimg] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setBgimg(window.innerWidth);

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const Destiny = ({ data }) => {
        const [activePlanet, setActivePlanet] = useState(data[0].name);

        const handleClick = (planet) => {
            setActivePlanet(planet);
        };

        const activePlanetData = data.find(planet => activePlanet === planet.name);

        return (
            <div className="main-box">
                <img className="img-planets" src={bgimg >= 768 ? activePlanetData.images.png : activePlanetData.images.webp} alt={activePlanetData.name} />
                <div className="sub-box">
                    <nav className="sub-box-nav">
                        <ul className="sub-box-ul">
                            {data.map((planet) => (
                                <li key={planet.name}
                                    className={`sub-box-li ${activePlanet === planet.name ? 'active' : ""}`}
                                    onClick={() => handleClick(planet.name)}
                                ><a>{planet.name}</a></li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mini-box">
                        <h2 className="mini-box-h">{activePlanetData.name}</h2>
                        <p className="mini-box-p">
                            {activePlanetData.description}
                        </p>
                        <div className="break"></div>
                        <div className="cube">
                            <div className="mini-cube">
                                <h3 className="mini-cube-h">Avg. distance</h3>
                                <p className="mini-cube-p">{activePlanetData.distance}</p>
                            </div>
                            <div className="mini-cube">
                                <h3 className="mini-cube-h">Est. travel time</h3>
                                <p className="mini-cube-p">{activePlanetData.travel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="destination" style={{ backgroundImage: `url(${bgimg >= 768 ? deskbg : mobbg})` }}>
            <article className="container">
                <h1 className="pick"><b className="bol-d">01</b> Pick your destination</h1>
                <Destiny data={data} />
            </article>
        </section>
    );
}