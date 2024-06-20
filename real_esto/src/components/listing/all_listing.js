import React from "react";
import "./all_listing.scss";
import Prop_img1 from "../../assets/imgs/real_esto_img6.jpg";

const All_listing = () => {

    return (
        <section className="w-100">
            <Side_bar />
            <div className="search_area">
                <div className="mx-auto d-flex align-items-center justify-content-center">
                    <input type="text" placeholder="Search by Keyword Name, location..." />
                    <span className="btn btn-primary text-center">Search</span>
                </div>
            </div>
            <div className="listing_section d-flex flex-wrap align-items-center justify-content-center">
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
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
                <h4>Property name</h4>
                <p>Location</p>
                <p>Price</p>
            </div>
        </div>
    )
};

export default All_listing;