import React from "react";
import { SearchSvg } from "../svg/SearchSvg/SearchSvg";
import { FavoriteSvg } from "../svg/FavoriteSvg/FavoriteSvg";
import { BasketSvg } from "../svg/BasketSvg/BasketSvg";
import "./navigation.scss";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <section className="nav-section">
      <div className="nav-section-container container">
        <h2 className="logo">Ignat</h2>

        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-list-item">
              <NavLink className="navigation-text" to="#">новинки</NavLink>
            </li>
            <li className="navigation-list-item">
              <NavLink className="navigation-text" to="#">чоловіки</NavLink>
            </li>
            <li className="navigation-list-item">
              <NavLink className="navigation-text" to="#">жінки</NavLink>
            </li>
            <li className="navigation-list-item">
              <NavLink className="navigation-text" to="#">аксесуари</NavLink>
            </li>
            <li className="navigation-list-item">
              <NavLink className="navigation-text" to="#">акції</NavLink>
            </li>
          </ul>
        </nav>

        <div className="btn-container">
          <div className="search-container">
            <input type="text" className="input-search" />
            <SearchSvg />
          </div>
          <NavLink>

            <FavoriteSvg />
          </NavLink>
          <NavLink>
   
            <BasketSvg />
          </NavLink>
        </div>
      </div>
    </section>
  );
};
