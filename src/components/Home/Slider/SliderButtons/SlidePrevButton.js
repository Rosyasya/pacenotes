import React from 'react';
import { useSwiper } from 'swiper/react';
import {faLongArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SlidePrevButton() {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slidePrev()}><FontAwesomeIcon icon={faLongArrowLeft} size='xl'/></button>
    );
}