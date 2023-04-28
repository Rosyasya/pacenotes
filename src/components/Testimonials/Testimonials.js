import React from "react";
import christoph from '../../images/christoph.png';
import sophie from '../../images/sophie.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";

const Testimonials = () => {
    return (
        <div className='testimonials_wrapper'>
            <div className="testimonials_container">
                <h1>Testimonials</h1>
                <div className="testimonials_slider">
                    <button><FontAwesomeIcon icon={faLongArrowLeft}/></button>
                    <TestimonialsCard name='Christoph Staeuble' position='CEO of Zaluvida' description='Daria is an exceptional consumer marketer and business leader with a superb understanding and mastery of commercial business drivers. This has enabled her to consistently deliver business growth on her brands/categories ahead of internal and external peers.' photo={christoph} alt='christoph' />
                    <TestimonialsCard name='Sophie Cochez Habryn' position='Co-Founder of Biodami' description='Standout talent and natural leader! Daria is a passionate business director, she has proven to lead complex projects across multiple countries, with a good understanding of consumers & customers. She has a sharp mind and great presentation skills. It is truly a pleasure to have her around on your team.' photo={sophie} alt='sophie' />
                    <button><FontAwesomeIcon icon={faLongArrowRight}/></button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;