import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Home.css";
import 'swiper/css/pagination';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import Carousel from './Car_data/Data';


export default function Home() {
    return (
        <>
            <div id="Home" className='swiper '>
                <Swiper
                    pagination={true}
                    modules={[Pagination,Navigation, Autoplay]}
                    className="mySwiper"
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                    loop={Infinity}
                >
                    {
                        Carousel.map((val)=>(
                            <SwiperSlide><img className='car-img' src={val.car_path} alt={val.car_name} /></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}
