import React from "react";
import ServicesCard from "./ServicesCard/ServicesCard";

const ServicesCardContainer = () => {
    const arrList = [
        {
            title: 'Engaged Package',
            price: '5000$',
            description: 'This package provides end-to-end services, from research and strategy development to talent acquisition and team building, with 15 hours per week spent within your organization for at least three months.',
            text: [
                'Deep dive analysis, including market research, competition, customer insights, as well as analyzing current campaigns, P&L, sales channels and funnels, operations ',
                'Development of actionable short and long-term strategy, including entering new markets, pipeline forecasting, and new product developments',
                'Creation of a detailed marketing plan, ensuring that all short and long-term goals are aligned and achievable',
                'Assistance in defining the key talent your business needs, and help you find, interview, and manage qualified candidates (FTE or freelance) to implement your marketing strategy',
                'Building a self-working marketing team that delivers results, ensuring that your business is well-equipped to achieve its KPIs and succeed in the long run',
            ]
        },
        {
            title: 'Half-Day Strategy',
            price: '3500$',
            description: 'This package provides a cost-effective way to gain valuable CMO expertise and audit, includes a 4-hour Strategy Session, customized to your company’s specific needs. Backed by 10 days of preparation with a deep dive into your business with the data and information provided by you.',
            text: [
                'A 4-hour Strategy Session tailored to your company\'s needs',
                '10 days of preparation from our experienced CMO, during which we\'ll ask questions via email or fast calls',
                'A deep dive into your business prior to the workshop, with the data and information provided by you',
                'Immediate value and actionable insights during the half-day consult session itself',
                'A punch list of marketing strategies and campaigns for the next 1-6',
                'A list of blind spots to improve your marketing efforts',
            ]
        },
        {
            title: 'Advisor on Call',
            price: '1500$',
            description: 'After the initial Engage or Half Day Strategy package, I can continue to advise you upon your needs and keep your marketing department on track to achieve set KPIs. Weekly status calls updates and unlimited email correspondence to answer any questions or concerns that may arise.',
            text: [
                'Weekly status meetings to review progress and adjust strategies as needed',
                'Providing ongoing guidance and leadership to in-house marketing teams or external agencies to ensure that your marketing efforts stay aligned with business goals',
                'Unlimited email correspondence to answer any questions or concerns that may arise',
                'Advising on talent acquisition, including final stage interviews, to ensure that your team is staffed with qualified professionals who can execute your marketing strategy effectively',
                'Providing overall marketing counsel and support to the executive team, helping to align marketing efforts with overall business objectives and advising on any challenges or opportunities that may arise',
            ]
        },
    ];

    return (
        <div className='cardContainer_wrapper'>
            <div className="cardContainer_container">
                {arrList.map(item => {
                    return <ServicesCard title={item.title} price={item.price} description={item.description} list={item} />
                })}
            </div>
        </div>
    );
};

export default ServicesCardContainer;