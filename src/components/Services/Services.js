import React from "react";
import ServicesPlan from "../ServicesPlan/ServicesPlan";

const Services = () => {

    return (
        <div className='services_wrapper'>
            <div className='services_container'>
                <h1>Services</h1>
                <div className='services_card_container'>
                    <ServicesPlan callback={() => console.log('test1')} isPremium={true} title='Engaged Package' price='5000$' description='This package provides end-to-end services, from research and strategy development to talent acquisition and team building, with 15 hours per week spent within your organization for at least three months.'/>
                    <ServicesPlan callback={() => console.log('test2')} title='Half-Day Strategy' price='3500$' description='This package provides a cost-effective way to gain valuable CMO expertise and audit, includes a 4-hour Strategy Session, customized to your company’s specific needs. Backed by 10 days of preparation with a deep dive into your business with the data and information provided by you.'/>
                    <ServicesPlan callback={() => console.log('test3')} title='Advisor on Call' price='1500$' description='After the initial Engage or Half Day Strategy package, I can continue to advise you upon your needs and keep your marketing department on track to achieve set KPIs. Weekly status calls updates and unlimited email correspondence to answer any questions or concerns that may arise.'/>
                </div>
            </div>
        </div>
    );
};

export default Services;