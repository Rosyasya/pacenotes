import React, { useState } from "react";
import lamp from '../images/lamp.png';
import flexibility from '../images/flexibility.png';
import cost_efficiency from '../images/cost_efficiency.png';
import team from '../images/team.png';

const Advantages = () => {
    const [cardStatus, setCardStatus] = useState(false);

    return (
        <div className='advantages_wrapper'>
            <div className='advantages_container'>
                <h1>What is <span className='purple_text'>a Fractional CMO</span>?</h1>
                <h5><strong>Fractional CMO is a part-time marketing executive hired for a specific project</strong>, such as launching a new product or expanding into a new market, or on an ongoing basis to provide strategic guidance and support for the company’s marketing efforts. <strong>Benefits of hiring a Fractional CMO</strong>:</h5>
                <div className='advantages_container_grid'>
                    <div className='advantages_container_grid_item'>
                        <div className="advantages_container_grid_item_img">
                            <img src={lamp} alt="lamp"/>
                        </div>
                        <div className='advantages_container_grid_item_info'>
                            <h3>Fresh Perspective</h3>
                            <h4>Gain access to new opportunities and strategies that can help you scale and grow faster.</h4>
                        </div>
                    </div>
                    <div className='advantages_container_grid_item'>
                        <div className="advantages_container_grid_item_img">
                            <img src={flexibility} alt="flexibility"/>
                        </div>
                        <div className='advantages_container_grid_item_info'>
                            <h3>Flexibility</h3>
                            <h4>Get expert marketing support as needed without committing to a full-time employee.</h4>
                        </div>
                    </div>
                    <div className='advantages_container_grid_item'>
                        <div className="advantages_container_grid_item_img">
                            <img src={cost_efficiency} alt="cost_efficiency"/>
                        </div>
                        <div className='advantages_container_grid_item_info'>
                            <h3>Cost-Efficiency</h3>
                            <h4>Save on high salary and benefits costs that come with hiring a full-time CMO.</h4>
                            <h6>*The average full-time CMO salary in the US is $342,900 according to <a className='purple_text' href="https://www.salary.com">www.salary.com</a></h6>
                        </div>
                    </div>
                    <div className='advantages_container_grid_item'>
                        <div className="advantages_container_grid_item_img">
                            <img src={team} alt="team"/>
                        </div>
                        <div className='advantages_container_grid_item_info'>
                            <h3>Build Your Team</h3>
                            <h4>Get help identifying the right number of full-time equivalents (FTEs) and contractors needed based on your goals and budget. Work with your Fractional CMO to hire and lead this team for maximum efficiency.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;