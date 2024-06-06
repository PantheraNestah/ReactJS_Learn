import React from 'react';
import './Legend.scss';
import image1 from '../../assets/imgs/image5.jpg';


const App_legend = () => {
    const containerStyle = {
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover', // Adjust background properties as needed
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
  
    return (
        <section className="legend_section" style={containerStyle}>
            <div className="legend_container d-flex flex-column align-items-center">
                <div className="legend_cont d-flex flex-column align-items-start">
                    <h3 className="legend_title">Breathe Easy, Monitoring Air Quality for a Healthier Future</h3>
                    <p>Real-time air quality data and insights for your community</p>
                    <span className="cont_more text-center d-flex align-items-center justify-content-center">
                        <a href="#">Learn More</a>
                    </span>
                </div>
                <div className="legend_stats col-lg-12 mx-auto d-flex align-items-center justify-content-between">
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
        </section>
    )
}

export default App_legend;