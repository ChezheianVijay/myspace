import React, { useEffect, useState } from "react";
import deskimg from "../assets/crew/background-crew-desktop.jpg";
import mobimg from "../assets/crew/background-crew-mobile.jpg";
import Douglaspng from "../assets/crew/image-douglas-hurley.png";
import Markpng from "../assets/crew/image-mark-shuttleworth.png";
import Victorpng from "../assets/crew/image-victor-glover.png";
import Ansgarpng from "../assets/crew/image-anousheh-ansari.png";
import Douglaswebp from "../assets/crew/image-douglas-hurley.webp";
import Markwebp from "../assets/crew/image-mark-shuttleworth.webp";
import Victorwebp from "../assets/crew/image-victor-glover.webp";
import Anshewebp from "../assets/crew/image-anousheh-ansari.webp";

export default function Crew() {

    const astronauts = [
        {
            "name": "Douglas Hurley",
            "images": {
                "png": `${Douglaspng}`,
                "webp": `${Douglaswebp}`
            },
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            "name": "Mark Shuttleworth",
            "images": {
                "png": `${Markpng}`,
                "webp": `${Markwebp}`
            },
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            "name": "Victor Glover",
            "images": {
                "png": `${Victorpng}`,
                "webp": `${Victorwebp}`
            },
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            "name": "Anousheh Ansari",
            "images": {
                "png": `${Ansgarpng}`,
                "webp": `${Anshewebp}`
            },
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ]

    const [bgimg, setBgimg] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setBgimg(window.innerWidth);

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Radios = ({ astronauts }) => {
        const [activeAstronaut, setActiveAstronaut] = useState(astronauts[0]);

        const handleRadioclick = (index) => {
            setActiveAstronaut(astronauts[index]);
        }

        return (
            <>
                <div className="crew-box">
                    <div className="crew-text">
                        <div className="ctbot">
                            <h2 className="crew-h">{activeAstronaut.role}</h2>
                            <p className="crew-p">{activeAstronaut.name}</p>
                            <p className="crew-bio">{activeAstronaut.bio}</p>
                        </div>
                        <div className="dots">
                            {astronauts.map((astronaut, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        name="dot"
                                        value={index}
                                        id={`dot-${index}`}
                                        className="dot-input"
                                        defaultChecked={index === 0}
                                        onClick={() => handleRadioclick(index)}
                                    />
                                    <label htmlFor={`dot-${index}`} className="dot"></label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img className="crew-img" src={bgimg >= 768 ? activeAstronaut.images.png : activeAstronaut.images.webp} alt={activeAstronaut.name} />
                </div>
            </>
        );

    };

    return (
        <section className="crew" style={{ backgroundImage: `url(${bgimg >= 768 ? deskimg : mobimg})` }} >
            <article className="container">
                <h1 className="pick"><b className="bol-d">02</b>Meet your crew</h1>
                <Radios astronauts={astronauts} />
            </article>
        </section>
    );
}