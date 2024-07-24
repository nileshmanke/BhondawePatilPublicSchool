import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay:2000,
          disableOnInteraction:false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=" " src="/images/slide-1 (1) firstimg.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide-1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide-2.webp " />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide-3.webp " />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
