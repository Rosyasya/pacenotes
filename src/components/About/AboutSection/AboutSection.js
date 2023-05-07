import React from "react";
import aboutHero from '../../../images/hero.png';

const AboutSection = () => {
    return (
        <div className='aboutSection_wrapper'>
            <div className="aboutSection_container">
                <div className="aboutSection_hero">
                    <div className="aboutSection_hero_img">
                        <img src={aboutHero} alt="Hero"/>
                    </div>
                    <div className="aboutSection_hero_info">
                        <h1>Hi, I'm <span className='purple_text'>Daria Bakai</span></h1>
                        <h4>As a CPG company, you face the ongoing challenge of staying ahead of the competition and driving growth in a rapidly evolving marketplace. That’s where I come in.</h4>
                    </div>
                </div>
                <div className="aboutSection_info">
                    <h2>About Me</h2>
                    <p>I am a growth-focused, pragmatic fractional CMO with 15 years of experience in the consumer-packaged goods industry working for multi billion international brands such as Perrigo, Kimberly-Clark and Philip Morris as well as for smaller local start-up products. I understand the challenges facing CPG companies and I am committed to delivering results that drive profitable growth and engagement. Throughout my career as CMO, I have developed and successfully executed global brand marketing strategies and their further roll-out from concept to go-to market in 27 countries.<br/>
                        As a fractional CMO, my goal is to bring my expertise and knowledge to help CPG companies grow and succeed in a rapidly evolving marketplace. I am passionate about using data-driven marketing strategies to drive engagement and growth, and I believe that only tailored personalized approach plays a critical role in delivering results. What sets me apart as a CMO is my unique blend of degrees in marketing and software engineering that helps me quickly leverage a lot of data and analysis to deliver actionable marketing strategies</p>
                </div>
                <div className="aboutSection_info">
                    <h2><span className='purple_text'>Pacenotes</span> as Your Marketing Strategy</h2>
                    <p>As a professional rally driver with 10 years of experience, I understand the importance of navigating challenges and reaching success. Both marketing and motorsport fields require a well thought-out plan, the ability to adapt to changing conditions, discipline, and focus.<br/>
                        In rally driving, the driver must have a clear understanding of the course, the obstacles, and the competition to develop a winning strategy. Similarly, in marketing, a clear understanding of the target audience, the competition, and the industry is essential in creating a successful marketing strategy. Quick decision-making and the ability to adapt to new trends and technologies are paramount to achieve success.<br/>
                        If you’re looking for a CMO who can bring a unique combination of careful planning, quick decision-making, and the ability to navigate through challenges, schedule a free call to learn more about how I can help.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;