import React from "react";
import {Link} from "react-router-dom";
import Button from "../../ui-kit/Button/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
    return (
        <div className='contactForm_wrapper'>
            <div className="contactForm_container">
                <div className="contactForm_info">
                    <h1>Get in touch</h1>
                    <h4>Fill out the form and we’ll get back to you promptly.</h4>
                    <div className='short_info'>
                        <p>Email:</p>
                        <Link className='purple_text' to='/' >
                            daria@Pacenotes.agency
                        </Link>
                    </div>
                </div>
                <form action="" className='contactForm_form'>
                    <input type="text" placeholder='Your Name (required)' />
                    <input type="text" placeholder='Your Email (required)' />
                    <input type="text" placeholder='Subject' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' ></textarea>
                    <Button title='Send' icon={faPaperPlane} type='primary_button' isReversed={true} iconSize='lg' />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;