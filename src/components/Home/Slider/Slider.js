import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import christoph from '../../../images/christoph.png';
import sophie from '../../../images/sophie.png';
import anna from '../../../images/anna.png';
import ganna from '../../../images/ganna.png';
import anneleen from '../../../images/anneleen.png';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import TestimonialsCard from "../Testimonials/TestimonialsCard/TestimonialsCard";

const Slider = () => {
    const [slidePerview, setSlidePerview] = useState(2);

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth <= 768) {
                setSlidePerview(1);
            } else if (window.innerWidth >= 769) {
                setSlidePerview(2);
            }
        };
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            <Swiper
                slidesPerView={slidePerview}
                spaceBetween={30}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <TestimonialsCard name='Christoph Staeuble' position='CEO of Zaluvida' description='Daria is an exceptional consumer marketer and business leader with a superb understanding and mastery of commercial business drivers. This has enabled her to consistently deliver business growth on her brands/categories ahead of internal and external peers.' photo={christoph} alt='christoph' />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialsCard name='Sophie Cochez Habryn' position='Co-Founder of Biodami' description='Standout talent and natural leader! Daria is a passionate business director, she has proven to lead complex projects across multiple countries, with a good understanding of consumers & customers. She has a sharp mind and great presentation skills. It is truly a pleasure to have her around on your team.' photo={sophie} alt='sophie' />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialsCard name='Anneleen Spooren' position='Vice President DSM Health' description='I worked with Daria and got to know a passionate and professional Marketeer, who was able to drive new product launches effectively, someone who had a sharp understanding of consumers and market trends and who brought an international and business driven mindset to the team.' photo={anneleen} alt='anneleen' />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialsCard name='Anna Chernetska' position='Perrigo' description='Had been working with Daria many years, while being on different positions. She is truly professional: always passionate about everything she’s doing, great leader and manager. Not afraid of big initiatives. Daria is a person who can move mountains)' photo={anna} alt='anna' />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialsCard name='Ganna (Anna) Solomakhina' position='Head of FullStory' description='I had the privilege of working with Daria in Omega Pharma. Daria is a result-oriented specialist with clear objectives and great communication skills. She is committed, sharp and a pleasure to work with as a team member.' photo={ganna} alt='ganna' />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;