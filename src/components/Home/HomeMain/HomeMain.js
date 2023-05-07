import React from "react";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import Button from "../../ui-kit/Button/Button";

const HomeMain = () => {
    return (
        <div className='homeMain_wrapper'>
            <div className='homeMain_container'>
                <h1>Fractional CMO</h1>
                <h2>Grow Your Business <span className='purple_text'>Up to 3x </span>Faster<br/> for <span className='purple_text'>Up to 10x </span>Less</h2>
                <Button title='Book a free call' type='primary_button' icon={faPhone} iconSize='lg' isReversed={true} link='/button' />
            </div>
        </div>
    );
};

export default HomeMain;