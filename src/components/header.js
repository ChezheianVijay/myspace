import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import open from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

const Header = ({ children }) => {

    const [openNav, setOpenNav] = useState(false);

    const handleNav = () => {
        setOpenNav(!openNav);
    }

    return (
        <main>
            <header>
                <div className="navcontainer">
                    <img className="logo" src={logo} />
                    <div className="line"></div>
                    <nav className={openNav ? "navbar active" : "navbar"} >
                        <ul className="navul">
                            <img className="close" src={close} alt="close" onClick={handleNav} />
                            <li className="navli"><NavLink className={({ isActive }) =>
                                isActive ? "navlinks active" : "navlinks"
                            } to={"/"}><b className="bol">00</b>Home</NavLink></li>
                            <li className="navli"><NavLink className={({ isActive }) =>
                                isActive ? "navlinks active" : "navlinks"
                            } to={"/destination"} ><b className="bol">01</b>Destination</NavLink></li>
                            <li className="navli"><NavLink className={({ isActive }) =>
                                isActive ? "navlinks active" : "navlinks"
                            } to={"/crew"} ><b className="bol">02</b>Crew</NavLink></li>
                            <li className="navli"><NavLink className={({ isActive }) =>
                                isActive ? "navlinks active" : "navlinks"
                            } to={"/technology"} ><b className="bol">03</b>Technology</NavLink></li>
                        </ul>
                    </nav>
                    <img className="open" src={open} alt="open" onClick={handleNav} />
                </div>
                <div className="bgnav"></div>
            </header>
            {children}
        </main>
    );
}

export default Header;