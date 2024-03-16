import React from "react";
import "./hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Hero = () => {
  //   const imagePaths = require("../../img/hero-img.jpg");

  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
 
        <SwiperSlide>
          <div className="swiper-hero-container">
            <div className="title-container">
              <h1 className="hero-title">Швидше. Вище. Сильніше.</h1>
              <p className="hero-title-accent"> Разом із Nike</p>
            </div>

            <div className="hero-info-container">
              <p className="sale-text">Знижки до 40%</p>
              <p className="time-text">Залишився лише тиждень</p>
            </div>
          </div>
        </SwiperSlide>

      
        <SwiperSlide>
          <div className="swiper-hero-container">
            <div className="title-container">
              <h1 className="hero-title">Швидше. Вище. Сильніше.</h1>
              <p className="hero-title-accent"> Разом із Nike</p>
            </div>

            <div className="hero-info-container">
              <p className="sale-text">Знижки до 40%</p>
              <p className="time-text">Залишився лише тиждень</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-hero-container">
            <div className="title-container">
              <h1 className="hero-title">Швидше. Вище. Сильніше.</h1>
              <p className="hero-title-accent"> Разом із Nike</p>
            </div>

            <div className="hero-info-container">
              <p className="sale-text">Знижки до 40%</p>
              <p className="time-text">Залишився лише тиждень</p>
            </div>
          </div>
        </SwiperSlide>

        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </Swiper>
    </section>
  );
};
