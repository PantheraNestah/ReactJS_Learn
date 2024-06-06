import React from 'react';
import './Discover_sect.scss';

const Discover_sect = () => {

    return (
        <section className="discover_sect d-flex flex-column">
            <div className="topic_area col-lg-10 mx-auto d-flex flex-column align-items-center">
                <p className="title">Discover</p>
                <h3 className="text-center">Visualize Air Quality Data with Polluwatch</h3>
                <p className="text-center col-lg-8">
                    Polluwatch provides real-time updates, historical data analysis, and predictive trends to help you understand and improve air quality in your community.
                </p>
            </div>
            <div className="summary_area_container d-flex align-items-center justify-content-center">
                <div className="summary_area col-10 mx-auto d-flex align-items-center justify-content-between">
                    <div className="summary_area_div col-lg-3">
                        <span className="mx-auto"></span>
                        <h4 className="text-center">Real-Time Updates</h4>
                        <p className="text-center">Stay informed with upto-the-hour air quality data</p>
                    </div>
                    <div className="summary_area_div col-lg-3">
                        <span className="mx-auto"></span>
                        <h4 className="text-center">Historical Data Analysis</h4>
                        <p className="text-center">Analyze past air quality trends to identify patterns and make informed decisions</p>
                    </div>
                    <div className="summary_area_div col-lg-3">
                        <span  className="mx-auto"></span>
                        <h4 className="text-center">Predictive Trends</h4>
                        <p className="text-center">Get insights into future air quality trends to plan ahead and take proactive measures</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover_sect;