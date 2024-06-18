import React from "react";
import valueImg from "../../assets/imgs/real_esto_img5.jpg"
import "./Values.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Values = () => {

    return (
        <section className="value_section col-12 d-flex">
            <div className="value_img col-lg-6 d-flex align-items-center justify-content-center">
                <div>
                    <img src={valueImg} alt="Handshake" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="value_header_section col-lg-11 mx-lg-auto">
                    <h4>Our Value</h4>
                    <h4>Serving your interests to valuable satisfaction</h4>
                </div>
                <div className="col-lg-11 mx-lg-auto">
                    <div className="accordion" id="values_accordion">
                        <article className="accordion-item">
                            <h5 className="accordion-header">
                                <button className="accordion-button d-flex align-items-center justify-content-between" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span class="material-symbols-outlined">group</span>
                                    <span className="col-8 text-center">Customer-Centric Approach</span>
                                </button>
                            </h5>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#values_accordion">
                                <ul class="accordion-body">
                                    <li>Personalized Service: Detail how you tailor your services to meet the unique needs of each client</li>
                                    <li>Customer Satisfaction: Showcase testimonials or statistics that reflect high levels of customer satisfaction.</li>
                                </ul>
                            </div>
                        </article>
                        <article>
                            <h5 className="accordion-header">
                                <button className="accordion-button collapsed  d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span class="material-symbols-outlined">real_estate_agent</span>
                                    <span className="col-8 text-center">Expertise and Professionalism</span>
                                </button>
                            </h5>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#values_accordion">
                                <ul class="accordion-body">
                                    <li>Experienced Team: Highlight the qualifications and experience of your team members</li>
                                    <li>Market Knowledge: Emphasize your deep understanding of the local real estate market.</li>
                                </ul>
                            </div>
                        </article>
                        <article>
                            <h5 className="accordion-header">
                                <button className="accordion-button collapsed  d-flex align-items-center justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span class="material-symbols-outlined">chart_data</span>
                                    <span className="col-8 text-center">Innovation</span>
                                </button>
                            </h5>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#values_accordion">
                                <ul class="accordion-body">
                                    <li>Use of Technology: Describe how you leverage the latest technology to provide superior service e.g., virtual tours, advanced analytics.</li>
                                    <li>Adaptability: Highlight your ability to adapt to market changes and incorporate innovative practices.</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values;