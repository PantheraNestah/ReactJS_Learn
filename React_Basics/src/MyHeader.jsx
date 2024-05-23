import { useState } from 'react'
import './scss/style.scss'

export default function MyHeader() {

    return (
        <>
            <header className="col-12">
                <nav className="col-10 d-flex align-items-end border">
                    <ul className="d-flex justify-content-between">
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Skills</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}