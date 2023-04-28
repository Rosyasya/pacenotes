import React from "react";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const Main = () => {
    return (
        <div className='main_wrapper'>
            <div className='main_container'>
                <h1>Fractional CMO</h1>
                <h2>Grow Your Business <span className='purple_text'>Up to 3x </span>Faster</h2>
                <h2>for <span className='purple_text'>Up to 10x </span>Less</h2>
                <Button title='Book a free call' type='primary_button' icon={faPhone} iconSize='lg' isReversed={true} link='/button' />
            </div>
        </div>
    );
};

export default Main;