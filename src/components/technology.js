import React, { useEffect, useState } from "react";
import deskbg from "../assets/technology/background-technology-desktop.jpg";
import mobbg from "../assets/technology/background-technology-mobile.jpg";
import Launchpng from "../assets/technology/image-launch-vehicle-portrait.jpg";
import Spaceportpng from "../assets/technology/image-spaceport-portrait.jpg";
import Capsulepng from "../assets/technology/image-space-capsule-portrait.jpg";
import Launchwebp from "../assets/technology/image-launch-vehicle-landscape.jpg";
import Spaceportwebp from "../assets/technology/image-spaceport-landscape.jpg";
import Capsulewebp from "../assets/technology/image-space-capsule-landscape.jpg";

export default function Technology() {

    const technologies = [
        {
            "name": "Launch vehicle",
            "images": {
                "portrait": `${Launchpng}`,
                "landscape": `${Launchwebp}`
            },
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            "name": "Spaceport",
            "images": {
                "portrait": `${Spaceportpng}`,
                "landscape": `${Spaceportwebp}`
            },
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            "name": "Space capsule",
            "images": {
                "portrait": `${Capsulepng}`,
                "landscape": `${Capsulewebp}`
            },
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]

    const [bgimg, setBgimg] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setBgimg(window.innerWidth);

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const Radios = ({ technologies }) => {
        const [activeTechnology, setActiveTechnology] = useState(technologies[0]);

        const handleRadioclick = (index) => {
            setActiveTechnology(technologies[index]);
        }

        return (
            <>
                <div className="tech-box">
                    <div className="dots">
                        {technologies.map((technology, index) => (
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
                                <label htmlFor={`dot-${index}`} className="dot">{index + 1}</label>
                            </div>
                        ))}
                    </div>
                    <div className="tech-text"> <h2 className="tech-h">The terminology...</h2>
                        <p className="tech-p">{activeTechnology.name}</p>
                        <p className="tech-bio">{activeTechnology.description}</p>
                    </div>
                    <img className="tech-img" src={bgimg >= 768 ? activeTechnology.images.portrait : activeTechnology.images.landscape} alt={activeTechnology.name} />
                </div>

            </>

        );

    };

    return (
        <section className="technology" style={{ backgroundImage: `url(${bgimg >= 768 ? deskbg : mobbg})` }} >
            <article className="container">
                <h1 className="pick"><b className="bol-d">03</b> Space launch 101</h1>
                <Radios technologies={technologies} />
            </article>
        </section>
    );
}