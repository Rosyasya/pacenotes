import React from "react";
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const ServicesPlan = ( { title, price, description, isPremium = false, callback } ) => {
    return (
        <div onClick={callback} className={`services_plan_container ${isPremium ? 'services_plan_container__premium' : ''}`}>
            <div className='services_plan_info'>
                <h3>{title}</h3>
                <p>Starting at</p>
                <h2>{price}/month</h2>
                <p>{description}</p>
            </div>
            <Button title='Read more' type='secondary_button' icon={faLongArrowRight} iconSize='xl' link='/' />
        </div>
    );
};

export default ServicesPlan;