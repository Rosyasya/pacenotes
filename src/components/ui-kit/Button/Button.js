import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Button = ( { title, type, icon, iconSize, isReversed = false, callback, link } ) => {
    return (
        <>
            <Link onClick={callback} className={`${type === 'primary_button' ? `primary_button ${isReversed ? 'primary_button__reversed' : ''}` : `secondary_button ${isReversed ? 'secondary_button__reversed' : ''}`} `} to={link}>
                {title}
                <FontAwesomeIcon icon={icon} size={iconSize}/>
            </Link>
        </>
    );
};

export default Button;