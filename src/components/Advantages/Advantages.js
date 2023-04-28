import React, { useState } from "react";
import lamp from '../../images/lamp.png';
import flexibility from '../../images/flexibility.png';
import cost_efficiency from '../../images/cost_efficiency.png';
import team from '../../images/team.png';
import AdvantagesCard from "../AdvantagesCard/AdvantagesCard";
import {Link} from "react-router-dom";

const Advantages = () => {
    const [cardStatus, setCardStatus] = useState(false);

    return (
        <div className='advantages_wrapper'>
            <div className='advantages_container'>
                <h1>What is <span className='purple_text'>a Fractional CMO</span>?</h1>
                <h5><strong>Fractional CMO is a part-time marketing executive hired for a specific project</strong>, such as launching a new product or expanding into a new market, or on an ongoing basis to provide strategic guidance and support for the company’s marketing efforts. <strong>Benefits of hiring a Fractional CMO</strong>:</h5>
                <div className='advantages_container_grid'>
                    <AdvantagesCard isPremium={true} title='Fresh Perspective' description='Gain access to new opportunities and strategies that can help you scale and grow faster.' icon={lamp} />
                    <AdvantagesCard title='Flexibility' description='Get expert marketing support as needed without committing to a full-time employee.' icon={flexibility} />
                    <AdvantagesCard title='Cost-Efficiency' description='Save on high salary and benefits costs that come with hiring a full-time CMO.' additionalDescription='*The average full-time CMO salary in the US is $342,900 according to www.salary.com' icon={cost_efficiency} />
                    <AdvantagesCard title='Build Your Team' description='Get help identifying the right number of full-time equivalents (FTEs) and contractors needed based on your goals and budget. Work with your Fractional CMO to hire and lead this team for maximum efficiency.' icon={team} />
                </div>
            </div>
        </div>
    );
};

export default Advantages;