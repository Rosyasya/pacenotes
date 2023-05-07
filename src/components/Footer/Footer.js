import React from "react";
import Button from "../ui-kit/Button/Button";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className='footer_wrapper'>
            <div className="footer_container">
                <div className='footer_logo_container'>
                    <Link id='footer_logo' to='/'>PACENOTES</Link>
                    <div id='footer_logo_upperline'></div>
                    <div id='footer_logo_bottomline'></div>
                </div>
                <div className="footer_description_container">
                    <h5>Maximize Your CPG Business Growth <br/>
                        FRACTIONAL CMO FOR CPG BUSINESS</h5>
                    <Button title='Book a free call' type='primary_button' icon={faPhone} iconSize='lg' isReversed={true} link='/' />
                </div>
                <div className="footer_info_container">
                    <h4>Contacts</h4>
                    <div className='footer_info'>
                        <p>Email:</p>
                        <Link className='purple_text' to='/' >
                            daria@Pacenotes.agency
                        </Link>
                    </div>
                    <div className='footer_info'>
                        <p>Follow me:</p>
                        <Link className='purple_text' to='/' >
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
            <h6>© 2023 | pacenotes.agency. All Rights Reserved.</h6>
        </div>
    );
};

export default Footer;