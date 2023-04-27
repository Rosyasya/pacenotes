import React from "react";
import christoph from '../../images/christoph.png';
import sophie from '../../images/sophie.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
    return (
        <div className='testimonials_wrapper'>
            <div className="testimonials_container">
                <h1>Testimonials</h1>
                <div className="testimonials_slider">
                    <button><FontAwesomeIcon icon={faLongArrowLeft}/></button>
                    <div className="testimonials_slider_item">
                        <img src={christoph} alt="christoph"/>
                        <div className="testimonials_slider_item_info">
                            <h3>Christoph Staeuble</h3>
                            <h4>CEO of Zaluvida</h4>
                            <h5>Daria is an exceptional consumer marketer and business leader with a superb understanding and mastery of commercial business drivers. This has enabled her to consistently deliver business growth on her brands/categories ahead of internal and external peers.</h5>
                        </div>
                    </div>
                    <div className="testimonials_slider_item">
                        <img src={sophie} alt="sophie"/>
                        <div className="testimonials_slider_item_info">
                            <h3>Sophie Cochez Habryn</h3>
                            <h4>Co-Founder of Biodami</h4>
                            <h5>Standout talent and natural leader! Daria is a passionate business director, she has proven to lead complex projects across multiple countries, with a good understanding of consumers & customers. She has a sharp mind and great presentation skills. It is truly a pleasure to have her around on your team.</h5>
                        </div>
                    </div>
                    <button><FontAwesomeIcon icon={faLongArrowRight}/></button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;