import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";

const ServicesPlan = ( { title, price, description, isPremium = false, callback } ) => {
    return (
        <div onClick={callback} className={`services_plan_container ${isPremium ? 'services_plan_container__premium' : ''}`}>
            <div className='services_plan_info'>
                <h3>{title}</h3>
                <p>Starting at</p>
                <h2>{price}/month</h2>
                <p>{description}</p>
            </div>
            <Link className='secondary_button' to='/'>
                Read more
                <FontAwesomeIcon icon={faLongArrowRight} size='xl'/>
            </Link>
        </div>
    );
};

export default ServicesPlan;