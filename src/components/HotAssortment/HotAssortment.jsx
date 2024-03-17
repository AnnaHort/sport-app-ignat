import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import whiteThermalUnderwear1x from "../../img/hotAssortment/white-thermal-underwear-1x.jpg";
import whiteThermalUnderwear2x from "../../img/hotAssortment/white-thermal-underwear-2x.jpg";
import bodybuildersTShirt1x from "../../img/hotAssortment/bodybuilders-t-shirt-1x.jpg";
import bodybuildersTShirt2x from "../../img/hotAssortment/bodybuilders-t-shirt-2x.jpg";
import bodybuildersChain1x from "../../img/hotAssortment/bodybuildersChain-1x.jpg";
import bodybuildersChain2x from "../../img/hotAssortment/bodybuildersChain-2x.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hotAssortment.scss";
import { SwiperArrowLeft } from "../svg/swiperArrowSvg/SwiperArrowLeft";
import { SwiperArrowRight } from "../svg/swiperArrowSvg/SwiperArrowRight";

export const HotAssortment = () => {
  return (
    <section className="hotAssortment-section container">
      <h2 className="hotAssortment-title">Найгарячіші товари</h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        slidesPerGroup={3}
        pagination={{
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
              return '0<span class="' + currentClass + '"></span> / 0<span class="' + totalClass + '"></span>';
            }
          }}
        navigation={{
          prevEl: ".swiper-button-left",
          nextEl: ".swiper-button-right",
        }}
        className="swiper-hotAssortment"
      >
        <SwiperSlide>
          <picture>
            <source
              srcSet={`${whiteThermalUnderwear1x} 1x, ${whiteThermalUnderwear2x} 2x`}
            />
            <img
              src={whiteThermalUnderwear1x}
              alt="white thermal underwear"
              className="white-thermal-underwear"
            />
          </picture>
          <h3 className="assortment-title">Термобілизна для бодібілдерів</h3>
          <p className="product-type">Для чоловіків</p>
          <p className="product-details">2 кольори</p>
          <p className="price">4000 грн.</p>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet={`${bodybuildersTShirt1x} 1x, ${bodybuildersTShirt2x} 2x`}
            />
            <img
              src={bodybuildersTShirt1x}
              alt="white thermal underwear"
              className="white-thermal-underwear"
            />
          </picture>
          <h3 className="assortment-title">Майка для бодібілдерів</h3>
          <p className="product-type">Для жінок</p>
          <p className="product-details">6 кольорів</p>
          <p className="price">1100 грн.</p>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet={`${bodybuildersChain1x} 1x, ${bodybuildersChain2x} 2x`}
            />
            <img
              src={bodybuildersChain1x}
              alt="white thermal underwear"
              className="white-thermal-underwear"
            />
          </picture>
          <h3 className="assortment-title">Ланцюжок для бодібілдерів</h3>
          <p className="product-type">Аксесуари</p>
          <p className="product-details">30 кг.</p>
          <p className="price">2000 грн.</p>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet={`${whiteThermalUnderwear1x} 1x, ${whiteThermalUnderwear2x} 2x`}
            />
            <img
              src={whiteThermalUnderwear1x}
              alt="white thermal underwear"
              className="white-thermal-underwear"
            />
          </picture>
          <h3 className="assortment-title">Термобілизна для бодібілдерів</h3>
          <p className="product-type">Для чоловіків</p>
          <p className="product-details">2 кольори</p>
          <p className="price">4000 грн.</p>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet={`${bodybuildersTShirt1x} 1x, ${bodybuildersTShirt2x} 2x`}
            />
            <img
              src={bodybuildersTShirt1x}
              alt="white thermal underwear"
              className="white-thermal-underwear"
            />
          </picture>
          <h3 className="assortment-title">Майка для бодібілдерів</h3>
          <p className="product-type">Для жінок</p>
          <p className="product-details">6 кольорів</p>
          <p className="price">1100 грн.</p>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet={`${bodybuildersChain1x} 1x, ${bodybuildersChain2x} 2x`}
            />
            <img
              src={bodybuildersChain1x}
              alt="white thermal underwear"
              className="white-thermal-underwear"
            />
          </picture>
          <h3 className="assortment-title">Ланцюжок для бодібілдерів</h3>
          <p className="product-type">Аксесуари</p>
          <p className="product-details">30 кг.</p>
          <p className="price">2000 грн.</p>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <picture>
            <source
              srcSet={`${whiteThermalUnderwear1x} 1x, ${whiteThermalUnderwear2x} 2x`}
            />
            <img
              src={whiteThermalUnderwear1x}
              alt="white thermal underwear"
              className="white-thermal-underwear"
            />
          </picture>
          <h3 className="assortment-title">Термобілизна для бодібілдерів</h3>
          <p className="product-type">Для чоловіків</p>
          <p className="product-details">2 кольори</p>
          <p className="price">4000 грн.</p>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet={`${bodybuildersTShirt1x} 1x, ${bodybuildersTShirt2x} 2x`}
            />
            <img
              src={bodybuildersTShirt1x}
              alt="white thermal underwear"
              className="white-thermal-underwear"
            />
          </picture>
          <h3 className="assortment-title">Майка для бодібілдерів</h3>
          <p className="product-type">Для жінок</p>
          <p className="product-details">6 кольорів</p>
          <p className="price">1100 грн.</p>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet={`${bodybuildersChain1x} 1x, ${bodybuildersChain2x} 2x`}
            />
            <img
              src={bodybuildersChain1x}
              alt="white thermal underwear"
              className="white-thermal-underwear"
            />
          </picture>
          <h3 className="assortment-title">Ланцюжок для бодібілдерів</h3>
          <p className="product-type">Аксесуари</p>
          <p className="product-details">30 кг.</p>
          <p className="price">2000 грн.</p>
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
