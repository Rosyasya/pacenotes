import React from "react";
import Button from "../Button/Button";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import roles from '../../images/roles.png';
import growth from '../../images/growth.png';
import selfTeam from '../../images/selfTeam.png';
import HelpCard from "../HelpCard/HelpCard";

const Help = () => {
    return (
        <div className='help_wrapper'>
            <div className="help_container">
                <div className="help_card_container">
                    <HelpCard title='Are you the CEO and CMO, perhapsholding other roles as well?' icon={roles} isPremium={true} />
                    <HelpCard title='Struggling to keep up with marketing in a constantly evolving landscape?' icon={growth} />
                    <HelpCard title='Not sure how to measure ROI and build a self-sufficient marketing team?' icon={selfTeam} />
                </div>
                <div className="help_info_container">
                    <h2>That’s where a <span className='purple_text'>Fractional Chief Marketing Officer</span> (CMO) can help</h2>
                    <p>Delegating marketing leadership to a Fractional CMO will free up your valuable time and let you focus on core business activities and networking.</p>
                    <Button title='Book a free call' type='primary_button' icon={faPhone} iconSize='lg' isReversed={true} link='/' />
                </div>
            </div>
        </div>
    );
};

export default Help;