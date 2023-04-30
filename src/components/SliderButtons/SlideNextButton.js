import React from 'react';
import { useSwiper } from 'swiper/react';
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slideNext()}><FontAwesomeIcon icon={faLongArrowRight} size='xl'/></button>
    );
}