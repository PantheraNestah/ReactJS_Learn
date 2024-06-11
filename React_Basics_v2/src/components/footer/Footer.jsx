import React from "react";
import "./Footer.scss";

export default function Footer() {
    return (
        <>
            <footer className="app_footer col-12 d-flex flex-column justify-content-between align-items-center">
                <div className="app_footer_content col-lg-9 mx-lg-auto d-flex align-items-start justify-content-center">
                    <div className="communities_sect d-flex flex-column align-items-start p-2  ps-0">
                        <h5>Dev Communities</h5>
                        <ul className="d-flex flex-column justify-content-between">
                            <li>
                                <a href="">Goolge Developers</a>
                            </li>
                            <li>
                                <a href="">SpringBoot KE</a>
                            </li>
                            <li>
                                <a href="">Django</a>
                            </li>
                            <li>
                                <a href="">Internet Computers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="contact_sect d-flex flex-column align-items-start p-2 ps-0">
                        <h5>Contact Me</h5>
                        <ul className="d-flex flex-column justify-content-between">
                            <li>
                                <span className="">
                                    <i className="bi bi-telephone-inbound me-3"></i>
                                    <span>+254757914258</span>
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-envelope-at me-3"></i>
                                <a href="">giftnestah@gmail.com</a>
                            </li>
                            <li>
                                <i className="bi bi-whatsapp me-3"></i>
                                <span href="">WhatsApp</span>
                            </li>
                        </ul>
                    </div>
                    <div className="socials_sect d-flex flex-column align-items-start p-2">
                        <h5>Lets Connect</h5>
                        <ul className="d-flex align-items-center justify-content-between p-2 ps-0">
                            <li>
                                <a href="">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="rights_sect text-center">© 2021 Gift Nestah P</p>
            </footer>
        </>
    )
}