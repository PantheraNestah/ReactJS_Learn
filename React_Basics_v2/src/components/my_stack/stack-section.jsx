import React from 'react';
import "./stack-section.scss";
import Bgimg from "../../assets/img/Tech-PNG-Pic.png";

export default function StackSection() {
    const bgImg = {
        backgroundImage: `url(${Bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    
        return (
            <>
                <section id="stack" className="sect_stack col-12"  style={bgImg}>
                    <h4 className="section_title">My stack</h4>
                    <div className="sect_stack_container col-lg-8 mx-auto">
                        <div className="stack_row d-flex justify-content-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="/img/java-4-logo.svg" alt=""/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="/img/Python-logo-notext.svg" alt=""/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="/img/js_icon.png" alt=""/>
                            </div>
                        </div>
                        <div className="stack_row d-flex justify-content-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="/img/Spring_Framework_Logo_2018.svg" alt=""/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="/img/django_icon2.png" alt=""/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="/img/react_icon3.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-5 mx-auto d-flex align-items-center justify-content-center">
                            <a href="" className="more_stacks text-center">more</a>
                        </div>
                        <div className="stack_row d-none justify-content-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="/img/js_icon.png" alt=""/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="/img/js_icon.png" alt=""/>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src="/img/js_icon.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }