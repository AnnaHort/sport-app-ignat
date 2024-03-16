import React from "react";
import { NavLink } from "react-router-dom";
import "./authSection.scss";

export const AuthSection = () => {
  return (
    <section className="auth-section">
      <div className="auth-section-container container">
      <div className="helps">
        <ul className="helper-list">
          <li className="helper-list-el">
            <a href="tel:0989000909" className="tel">
              098 900 09 09
            </a>
          </li>
          <li className="helper-list-el">
            <NavLink href="#" className="helper-text">
              Допомога
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="auth-container">
        <NavLink href="#" className="login">
          Увійти
        </NavLink>
        <span className="slash"> / </span>
        <NavLink href="#" className="registration">
          Зареєструватися
        </NavLink>
      </div>
      </div>
     
    </section>
  );
};
