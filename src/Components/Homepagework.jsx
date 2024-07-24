import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


const Homepagework = () => {


  return (
    <div>
     <Swiper
        // spaceBetween={30}
        effect={'fade'}
        navigation={true}
        autoplay={{
          delay:5000,
          disableOnInteraction:false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper" >

        <SwiperSlide>
          <img className="w-full  border-2  border-primary" src="./images/home-welcome-1.webp " />
        </SwiperSlide>
        <SwiperSlide> 
          <img className=" w-full border-2  border-primary"  src="./images/home-welcome-2.webp" />
        </SwiperSlide>
        


      </Swiper>
    </div>
  )
}

export default Homepagework