import React from "react";
import {Link} from "react-router-dom";
import hero from '../images/hero.png';
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Hero = () => {
    return (
        <div className='hero_wrapper'>
            <div className='hero_container'>
                <div className="hero_info_container">
                    <h1>Hi, I'm <span className='purple_text'>Daria Bakai</span></h1>
                    <p>As a Fractional CMO and founder of Pacenotes agency, I bring 15 years of experience in the CPG/DTC industry, having executed global brand marketing strategies for major corporations such as <strong>Philip Morris, Perrigo, and Kimberly-Clark in 27 different countries.</strong> <br/>
                        Now, my mission as a Fractional CMO is to help start-ups and mid-size companies succeed in today’s fast-paced marketplace. I firmly believe that data-driven marketing strategies are essential to drive engagement and growth, and I am committed <strong>to providing tailored and personalized approaches</strong> that deliver results for my clients.</p>
                    <Link className='secondary_button' to='/'>
                        Read more
                        <FontAwesomeIcon icon={faLongArrowRight} />
                    </Link>
                </div>
                <img src={hero} alt="hero"/>
            </div>
        </div>
    );
};

export default Hero;