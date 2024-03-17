import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperArrowLeft } from "../svg/swiperArrowSvg/SwiperArrowLeft";
import { SwiperArrowRight } from "../svg/swiperArrowSvg/SwiperArrowRight";
import userAvatar from "../../img/hero-img.jpg";
import { StartsFull } from "../svg/starts/StartsFull";
import { StartsEmpty } from "../svg/starts/StartsEmpty";

import "./reviews.scss";

export const Reviews = () => {
  return (
    <section className="reviews-section container">
      <h2 className="reviews-section-title">Відгуги наших клієнтів</h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        slidesPerGroup={4}
        pagination={{
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return (
              '0<span class="' +
              currentClass +
              '"></span> / 0<span class="' +
              totalClass +
              '"></span>'
            );
          },
        }}
        navigation={{
          prevEl: ".swiper-button-left",
          nextEl: ".swiper-button-right",
        }}
        className="swiper-hotAssortment"
      >
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-slider-container">
            <div className="about-user-container">
              <img src={userAvatar} alt="user avatar" className="user-img" />

              <div className="user-reviews">
                <ul className="starts-list">
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsFull />
                  </li>
                  <li className="starts-lisy-el">
                    <StartsEmpty />
                  </li>
                </ul>
                <h3 className="user-name">Жора Ремінгтон</h3>
              </div>
            </div>

            <p className="review-text">
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </SwiperSlide>

        
        <button className="swiper-button-left">
          <SwiperArrowLeft />
        </button>
        <button className="swiper-button-right">
          <SwiperArrowRight />
        </button>

      </Swiper>


    </section>
  );
};
