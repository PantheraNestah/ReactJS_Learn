import React from 'react';
import './Listing_section.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Listing_section = () => {

    return (
        <section className="listing_section">
            <div id={"props_carousel"} className="col-lg-10 mx-lg-auto carousel slide" data-bs-ride="carousel">
                <div className="carousel_header d-flex flex-column ">
                    <h4>Best Choices</h4>
                    <h4>Popular Properties</h4>
                </div>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#props_carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#props_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-item-container d-flex col-12">
                            <div className="property d-flex align-items-center justify-content-center">Poperty-card-1.1</div>
                            <div className="property d-flex align-items-center justify-content-center">Poperty-card-1.2</div>
                            <div className="property d-flex align-items-center justify-content-center">Poperty-card-1.3</div></div>
                        </div>
                    <div className="carousel-item">
                        <div className="carousel-item-container d-flex col-12">
                            <div className="property d-flex align-items-center justify-content-center">Poperty-card-2.1</div>
                            <div className="property d-flex align-items-center justify-content-center">Poperty-card-2.2</div>
                            <div className="property d-flex align-items-center justify-content-center">Poperty-card-2.3</div>
                        </div>
                    </div>
                </div>
                <div className="carousel-control-btns d-flex align-items-center">
                    <button className="carousel-control-prev" type="button" data-bs-target="#props_carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#props_carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
                <p className="col-lg-5 mx-auto text-center">
                    <a href="#">Discover</a>
                </p>
            </div>
        </section>
    );
}
export default Listing_section;