import React from "react";
import "./Hero.scss";
import heroImg from "../../assets/imgs/hero_bg.jpg";

const Hero = () => {
    const bgStyle = {
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <section className="app_hero" style={bgStyle}>
            <div className="hero_content d-flex flex-column align-items-start">
                <h2 className="text-start">Discover Your Dream Home Today</h2>
                <p className="text-start">
                    Search for your dream home in the perfect location. Forget all difficulties in finding a home.
                </p>
                <div className="search_area mx-auto d-flex align-items-center justify-content-between">
                    <input type="text" />
                    <button className="btn btn-primary">Search</button>
                </div>
                <div className="hero_stats mx-auto d-flex">
                    <div className="d-flex flex-column align-items-center">
                        <span className="stat_figure text-center">100 <span className="stat_plus">+</span></span>
                        <span className="stat_name text-center">Products</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <span className="stat_figure text-center">300 <span className="stat_plus">+</span></span>
                        <span className="stat_name text-center">Clients</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <span className="stat_figure text-center">50 <span className="stat_plus">+</span></span>
                        <span className="stat_name text-center">Trusted Partners</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;