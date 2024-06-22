import React, { useState, useEffect } from 'react';

export default function MyHeader() {

    return (
        <>
            <header className="col-12 d-flex justify-content-end">
                <nav className={`col-lg-7 d-flex align-items-end justify-content-end`}>
                    <ul className="col-lg-9 d-flex align-items-center justify-content-between">
                        <li><a className="nav_link" href="#home">Home</a></li>
                        <li><a className="nav_link" href="#stack">My Stack</a></li>
                        <li><a className="nav_link" href="#projects">Projects</a></li>
                        <li><a className="nav_link" href="#" disabled>Experience</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}