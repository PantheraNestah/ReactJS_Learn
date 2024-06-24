import React, { useState, useEffect } from "react";
import "./all_listing.scss";
import Prop_img1 from "../../assets/imgs/real_esto_img6.jpg";

const All_listing = () => {
  const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        const offset = window.pageYOffset;
    
        if (offset >= 80) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="main_prop_listing w-100">
            <Side_bar />
            <div className={`search_area ${isFixed ? 'fixed' : ''}`}>
                <div className="mx-auto d-flex align-items-center justify-content-center">
                    <input type="text" placeholder="Search by Keyword Name, location..." />
                    <span className="btn text-center">Search</span>
                </div>
            </div>
            <div className="latest_listing">
                <h4 className="">Latest in the Market</h4>
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                </div>
            </div>
            <div className="offer_listing">
                <h4>Best Offers</h4>
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                </div>
            </div>
            <div className="all_listing">
                <h4>All Properties</h4>
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                </div>
            </div>
        </section>
    )
};

const Side_bar = () => {
    return (
        <div className="listing_side_bar">
            <h4>Filter by</h4>
            <div className="price_filter">
                <h5>Price</h5>
                <input type="range" min="0" max="1000000" />
            </div>
            <div className="type_filter">
                <h5>Property type</h5>
                <select>
                    <option value="all">All</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="land">Land</option>
                    <option value="commercial">Commercial</option>
                </select>
            </div>
            <div className="region_filter">
                <h5>Region located</h5>
                <ul className="d-flex flex-column">
                    <li className="d-flex">
                        <input type="checkbox" name="" id="" />
                        <label for="">Nairobi</label>
                    </li>
                    <li className="d-flex">
                        <input type="checkbox" />
                        <label for="">Coast</label>
                    </li>
                    <li className="d-flex">
                        <input type="checkbox" />
                        <label for="">Central</label>
                    </li>
                    <li className="d-flex">
                        <input type="checkbox" />
                        <label for="">Western</label>
                    </li>
                    <li className="d-flex">
                        <input type="checkbox" />
                        <label for="">Rift Valley</label>
                    </li>
                </ul>
            </div>
        </div>
    )
};

const Property = () => {
    return (
        <div className="property_card">
            <img src={Prop_img1} alt="" />
            <div className="property_info">
                <h5>Property name</h5>
                <ul className="d-flex align-items-center justify-content-between">
                    <li>Investment</li>
                    <li>Luxury</li>
                    <li>Prime Location</li>
                </ul>
                <p>Location</p>
                <p>Price</p>
            </div>
        </div>
        /* investment luxury prime location */
    )
};

export default All_listing;