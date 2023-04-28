import React from "react";

const HelpCard = ( { title, icon, isPremium = false } ) => {
    return (
        <div className={`help_card ${isPremium ? 'help_card__premium' : ''}`}>
            <div className={`help_card_img_container ${isPremium ? 'help_card_img_container__premium' : ''}`}>
                <img src={icon} alt="lamp"/>
            </div>
            <h4>{title}</h4>
        </div>
    );
};

export default HelpCard;