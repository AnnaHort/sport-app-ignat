import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthSection = () => {
  return (
    <section className="auth-section">
      <div className="helps">
        <ul className="helper-list">
          <li className="helper-list-el">
            <a href="tel:0989000909" className="tel">
              098 900 09 09
            </a>
          </li>
          <li className="helper-list-el">
            <NavLink href="#">Допомога</NavLink>
          </li>
        </ul>
      </div>

      <div className="auth-container">
        <NavLink href="#">Увійти</NavLink>
        <span> / </span>
        <NavLink href="#">Зареєструватися</NavLink>
      </div>
    </section>
  );
};
