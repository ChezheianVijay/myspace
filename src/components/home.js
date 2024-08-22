import React, { useEffect, useState } from "react";
import desktopBackground from "../assets/home/background-home-desktop.jpg";
import mobileBackground from "../assets/home/background-home-mobile.jpg";

export default function Home() {

    const [bgimg, setBgimg] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setBgimg(window.innerWidth);

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <section className="landing" style={{
            backgroundImage: `url(${bgimg >= 768 ? desktopBackground : mobileBackground})`,
        }}>
            <article className="container">
                <div className="content">
                    <h1 className="land-title">So, you want to travel to
                        <br />
                        <span className="land-span">SPACE</span>
                    </h1>
                    <p className="land-p">
                        Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <a className="explore" href="#">Explore</a>
            </article>
        </section>
    );
}