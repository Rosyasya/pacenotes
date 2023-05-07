import React from "react";

const AdvantagesCard = ( { title, description, additionalDescription, icon, isPremium = false } ) => {
    return (
        <div className={`advantages_container_grid_item ${isPremium ? 'advantages_container_grid_item__premium' : ''}`}>
            <div className={`advantages_container_grid_item_img ${isPremium ? 'advantages_container_grid_item_img__premium' : ''}`}>
                <img src={icon} alt="lamp"/>
            </div>
            <div className='advantages_container_grid_item_info'>
                <h3>{title}</h3>
                <h4>{description}</h4>
                <h6>{additionalDescription}</h6>
            </div>
        </div>
    );
};

export default AdvantagesCard;