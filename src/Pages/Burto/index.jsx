import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/parallax";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {EffectCoverflow,  Navigation, Parallax}from 'swiper/modules'
import './style.scss'

function index() {
  return (
    <div className="bruto container">
     <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Navigation, Parallax]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src='https://picsum.photos/id/20/660/340' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://picsum.photos/id/20/660/340' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://picsum.photos/id/20/660/340' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://picsum.photos/id/20/660/340' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://picsum.photos/id/20/660/340' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://picsum.photos/id/20/660/340' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://picsum.photos/id/20/660/340' alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </div>
  );
}

export default index;
import "swiper/css";
