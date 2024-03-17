import React from "react";
import { Link } from "react-router-dom";
import "./aboutUs.scss";
import { InstagramSvg } from "../svg/InstagramSvg/InstagramSvg";
import { ViberSvg } from "../svg/Viber/ViberSvg";
import { TelegramSvg } from "../svg/TelegramSvg/TelegramSvg";

export const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-section-container container">

        <div className="about-us-contact-container">

          <div className="our-contact-container">
            <h3 className="about-us-title">Контакт - центр</h3>
            <ul className="about-us-list">
              <li className="about-us-list-el">
                <a href="tel:098 900 09 09 " className="about-us-info">
                  098 900 09 09{" "}
                </a>
              </li>
              <li className="about-us-list-el">
                <p className="about-us-info">Пн - Пт 09:00 - 21:00</p>
              </li>

              <li className="about-us-list-el">
                <p className="about-us-info">Пн - Пт 09:00 - 21:00</p>
              </li>
            </ul>
          </div>

          <div className="social-media-container">
            <InstagramSvg />
            <ViberSvg />
            <TelegramSvg />
          </div>
        </div>

        <div className="about-us-container">
          <h3 className="about-us-title">Покупцям</h3>
          <ul className="about-us-list">
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Оплата і доставка
              </Link>
            </li>
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Повернення
              </Link>
            </li>
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Питання та відповіді
              </Link>
            </li>
          </ul>
        </div>

        <div className="about-us-container">
          <h3 className="about-us-title">Особистий кабінет</h3>
          <ul className="about-us-list">
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Мої дані
              </Link>
            </li>
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Історія замовлень
              </Link>
            </li>
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Улюблені
              </Link>
            </li>
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Розсилки
              </Link>
            </li>
          </ul>
        </div>

        <div className="about-us-container">
          <h3 className="about-us-title">Про компанію</h3>

          <ul className="about-us-list">
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Про нас
              </Link>
            </li>
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Новини
              </Link>
            </li>
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Стати партнером
              </Link>
            </li>
            <li className="about-us-list-el">
              <Link to="#" className="about-us-info">
                Угода користувача
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
