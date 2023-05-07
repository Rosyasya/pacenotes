import React from "react";
import perrigo from '../../../images/perrigo.png';
import kimberly_clark from '../../../images/kimberly_clark.png';
import pholip_morris from '../../../images/philip_morris.png';
import glusco from '../../../images/glusco.png';
import omega_pharma from '../../../images/omega_pharma.png';

const Logos = () => {
    return (
        <div className='logos_wrapper'>
            <div className='logos_container'>
                <ul>
                    <li>
                        <img src={perrigo} alt="Perrigo"/>
                    </li>
                    <li>
                        <img src={kimberly_clark} alt="Kimberly-Clark"/>
                    </li>
                    <li>
                        <img src={pholip_morris} alt="PHILIP MORRIS"/>
                    </li>
                    <li>
                        <img src={glusco} alt="GLUSCO"/>
                    </li>
                    <li>
                        <img src={omega_pharma} alt="OMEGA PHARMA"/>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h3>30<span className='purple_text'>+</span></h3>
                        <h4>Countries</h4>
                    </li>
                    <li>
                        <h3>$200M<span className='purple_text'>+</span></h3>
                        <h4>Revenue Growth</h4>
                    </li>
                    <li>
                        <h3>50<span className='purple_text'>+</span></h3>
                        <h4>Product Launches</h4>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Logos;