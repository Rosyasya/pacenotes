import React, {useState} from "react";
import { Link } from "react-router-dom";
import {faBars, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../ui-kit/Button/Button";
import MobileMenu from "./MobileMenu/MobileMenu";
import * as Scroll from 'react-scroll';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const Anchor = Scroll.Link;

    return (
        <div className='header_wrapper'>
            <div className='header_container'>
                <div className='logo_container'>
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
                            <Link to='/about'>About me</Link>
                        </li>
                        <li>
                            <Link to='/services'>Services</Link>
                        </li>
                        <li>
                            <Anchor to='Testimonials'>Testimonials</Anchor>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/contacts'>Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <Button title='Book a free call' type='primary_button' icon={faPhone} iconSize='lg' isReversed={true} link='/' />
                <button onClick={() => setBurgerStatus(!burgerStatus)} className='header_burger'>
                    <FontAwesomeIcon icon={faBars} size='2xl' />
                </button>
            </div>
            <MobileMenu burgerStatus={burgerStatus} setBurgerStatus={setBurgerStatus} />
        </div>
    );
};

export default Header;