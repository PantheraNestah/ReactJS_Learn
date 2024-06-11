import React from "react";
import "./footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="footer_cont">
                <div></div>
                <div className="contact_socials d-flex justify-content-center col-lg-8 mx-lg-auto border">
                    <div className="address d-flex flex-column">
                        <h5>Get in touch with us</h5>
                        <span>Real Homez</span>
                        <span>123, Main Street, New York, USA</span>
                        <span>
                            <i className="bi bi-telephone-inbound me-2"></i>
                            +1234567890
                        </span>
                        <span>
                            <i className="bi bi-envelope-at me-2"></i>
                            real.homez@info.co.ke
                        </span>
                    </div>
                    <div className="d-flex flex-column">
                        <h5>Our Socials</h5>
                        <div className="socials_cont d-flex">
                            <a href="#">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a href="#">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#"> 
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;