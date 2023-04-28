import React from "react";

const TestimonialsCard = ( { name, position, description, photo, alt } ) => {
    return (
        <div className="testimonials_slider_item">
            <img src={photo} alt={alt} />
            <div className="testimonials_slider_item_info">
                <h3>{name}</h3>
                <h4>{position}</h4>
                <h5>{description}</h5>
            </div>
        </div>
    );
};

export default TestimonialsCard;