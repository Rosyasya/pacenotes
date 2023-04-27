import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
    return (
        <div className='main_wrapper'>
            <div className='main_container'>
                <h1>Fractional CMO</h1>
                <h2>Grow Your Business <span className='purple_text'>Up to 3x </span>Faster</h2>
                <h2>for <span className='purple_text'>Up to 10x </span>Less</h2>
                <Link className='primary_button' to='/button'>
                    <FontAwesomeIcon icon={faPhone} />
                    Book a free call
                </Link>
            </div>
        </div>
    );
};

export default Main;