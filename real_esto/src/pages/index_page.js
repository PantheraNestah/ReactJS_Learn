import React from 'react';
import Hero from '../components/Hero/Hero';
import Listing_section from '../components/Properties_carousel/Listing_section';
import Values from '../components/Values_section/Values';
import Footer from '../components/footer/Footer';

const Index_page = () => {
    return (
        <div className="w-100">
            <Hero />
            <Listing_section />
            <Values />
            <Footer />
        </div>
    );
}

export default Index_page;