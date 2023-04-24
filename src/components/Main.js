import React from "react";
import {Link} from "react-router-dom";
import phone from "../images/phone.png";

const Main = () => {
    return (
        <div className='main_container'>
            <h1>Fractional CMO</h1>
            <h2>Grow Your Business <span className='purple_text'>Up to 3x </span>Faster</h2>
            <h2>for <span className='purple_text'>Up to 10x </span>Less</h2>
            <Link className='primary_button' to='/'>
                <img src={phone} alt="phone"/>
                Book a free call
            </Link>
        </div>
    );
};

export default Main;