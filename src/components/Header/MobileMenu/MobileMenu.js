import React from "react";
import {faPhone, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import Button from "../../ui-kit/Button/Button";

const MobileMenu = ( { burgerStatus, setBurgerStatus } ) => {
    return (
        <div className={`mobile_menu_wrapper ${burgerStatus ? 'mobile_active' : ''}`}>
            <div className="mobile_menu_container">
                <button onClick={() => setBurgerStatus(!burgerStatus)}>
                    <FontAwesomeIcon icon={faXmark} size='2xl'/>
                </button>
                <nav className='mobile_menu_nav_container'>
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
                <Button title='Book a free call' type='primary_button' icon={faPhone} isReversed={true} link='/' />
                <div className='mobile_info_container'>
                    <div className='short_info'>
                        <p>Email:</p>
                        <Link className='purple_text' to='/' >
                            daria@Pacenotes.agency
                        </Link>
                    </div>
                    <div className='short_info'>
                        <p>Follow me:</p>
                        <Link className='purple_text' to='/' >
                            LinkedIn
                        </Link>
                    </div>
                </div>
                <div className='logo_container'>
                    <Link id='Logo' to='/'>PACENOTES</Link>
                    <div id='Logo_upperline'></div>
                    <div id='Logo_bottomline'></div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;