import React from "react";
import Button from "../ui-kit/Button/Button";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

const AnyQuestions = () => {
    return (
        <div className='anyQuestions_wrapper'>
            <div className="anyQuestions_container">
                <h1>Do you have any questions?</h1>
                <Button title='Book a free call' type='primary_button' icon={faPhone} iconSize='lg' isReversed={true} link='/' />
            </div>
        </div>
    );
};

export default AnyQuestions;