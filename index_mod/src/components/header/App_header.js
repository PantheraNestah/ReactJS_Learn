import React from 'react';
import { useState, useEffect } from 'react';
import './App_header.scss';

const App_nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) { // You can adjust this value as needed
          setScrolled(true);
        } else {
          setScrolled(false);
        }
    };
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };}, []);

    return (
        <nav className={scrolled ? "App_nav_scrolled col-lg-12 d-flex justify-content-between" : "App_nav col-lg-12 d-flex justify-content-between"}>
            <div className="logo_area">
                <h2 className="">Polluwatch</h2>
            </div>
            <div className="links_area col-lg-8 d-flex align-items-center justify-content-center">
                <ul className="d-flex align-items-center justify-content-center col-lg-7">
                    <li>
                        <a className="nav_link" href="#">Home</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Dashboard</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">About</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="reg_area">
                <ul className="d-flex mx-auto">
                    <li>
                        <a className="nav_link" href="#">Login</a>
                    </li>
                    |
                    <li>
                        <a className="nav_link" href="#">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default App_nav;