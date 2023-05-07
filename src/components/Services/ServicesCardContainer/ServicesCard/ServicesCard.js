import React from "react";

const ServicesCard = ( { title, price, description, list } ) => {
    return (
        <div className='card_container'>
            <h3>{title}</h3>
            <h4>Starting at</h4>
            <h2 className='purple_text'>{price}<span style={{fontWeight: 400}}>/month</span></h2>
            <p>{description}</p>
            <hr />
            <ul>
                {list.text.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    );
};

export default ServicesCard;