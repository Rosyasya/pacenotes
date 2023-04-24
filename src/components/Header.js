import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <div className='header_wrapper'>
            <div className='header_container'>
                <div className='logo_cotainer'>
                    <Link id='Logo' to='/'>PACENOTES</Link>
                    <div id='Logo_upperline'></div>
                    <div id='Logo_bottomline'></div>
                </div>
                <nav className='nav_container'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>About me</Link>
                        </li>
                        <li>
                            <Link to='/'>Services</Link>
                        </li>
                        <li>
                            <Link to='/'>Testimonials</Link>
                        </li>
                        <li>
                            <Link to='/'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/'>Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <Link className='primary_button' to='/'>
                    <FontAwesomeIcon icon={faPhone} />
                    Book a free call
                </Link>
            </div>
        </div>
    );
};

export default Header;