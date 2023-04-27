import React from "react";
import whyFirstHero from '../../images/whyFirstHero.png';
import whySecondHero from '../../images/whySecondHero.png';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";

const WhyPacenotes = () => {
    return (
        <div className='why_wrapper'>
            <div className="why_container">
                <div className="why_row">
                    <div className="why_info">
                        <h1>Why <span className='purple_text'>Pacenotes</span>?</h1>
                        <p>In addition to my career in marketing, I have been a <strong>professional rally driver</strong> for the past decade. <br/>
                            If you are unfamiliar with rally driving, <strong>pacenotes are a crucial component</strong> that every driver relies on to guide them through a course at high speeds. These notes are read by co-driver during the race and are detailed instructions about upcoming turns, corners, jumps, and other obstacles. The accuracy and clarity of these pacenotes are paramount, as they can often make the difference between a victory and a defeat. With every stage pacenotes are adapted considering changing conditions of the road.</p>
                    </div>
                    <div className="why_img">
                        <img src={whyFirstHero} alt="first hero"/>
                    </div>
                </div>
                <div className="why_row__reverse">
                    <div className="why_info">
                        <p>As such, through my years of racing, I have come to understand that <strong>preparation and agility are two critical components</strong> that are essential for success. Much like pacenotes for rally drivers, a <strong>well-crafted marketing strategy with a step-by-step marketing plan</strong> acts as a roadmap to guide businesses through the challenges of the market. <br/>
                            As your CMO, <strong>I’ll provide you the pacenotes, or marketing strategy</strong>, to help navigate the market and reach the finish line ahead of the competition. I’ll work with you every step of the way, updating and adapting our strategy whenever needed to ensure short and long-term success.</p>
                    </div>
                    <div className="why_img">
                        <img src={whySecondHero} alt="second hero"/>
                    </div>
                </div>
                <Link className='secondary_button' to='/'>
                    Read more
                    <FontAwesomeIcon icon={faLongArrowRight} size='xl'/>
                </Link>
            </div>
        </div>
    );
};

export default WhyPacenotes;