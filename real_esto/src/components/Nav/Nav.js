import React from 'react';
import "./Nav.scss";

const Nav = () => {
    return (
        <nav className="app_nav d-flex align-items-end">
            <h1>Real Homez</h1>
            <ul className="nav_links col-lg-7 d-flex align-items-end justify-content-center">
                <li><a className="nav_link" href="#">Home</a></li>
                <li><a className="nav_link" href="#">Properties</a></li>
                <li><a className="nav_link" href="#">Agents</a></li>
                <li><a className="nav_link" href="#">About</a></li>
                <li><a className="nav_link" href="#">Contact</a></li>
            </ul>
            <ul className="reg_links d-flex align-items-end">
                <li><a href="#">Sign In</a></li>|
                <li><a href="#">Register</a></li>
            </ul>
        </nav>
    );
}

export default Nav;