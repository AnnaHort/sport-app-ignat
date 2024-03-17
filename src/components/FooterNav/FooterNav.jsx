import React from "react";
import { NavLink } from "react-router-dom";
import "./footerNav.scss"

export const FooterNav = () => {
  return (
    <section className="footer-nav-section">
        <div className="footer-nav-container container">

        <nav className="footer-navigation">
        <ul className="footer-navigation-list">
          <li className="footer-navigation-list-item">
            <NavLink className="footer-navigation-text" to="#">новинки</NavLink>
          </li>
          <li className="footer-navigation-list-item">
            <NavLink className="footer-navigation-text" to="#">чоловіки</NavLink>
          </li>
          <li className="footer-navigation-list-item">
            <NavLink className="footer-navigation-text" to="#">жінки</NavLink>
          </li>
          <li className="footer-navigation-list-item">
            <NavLink className="footer-navigation-text" to="#">аксесуари</NavLink>
          </li>
          <li className="footer-navigation-list-item">
            <NavLink className="footer-navigation-text" to="#">акції</NavLink>
          </li>
        </ul>
      </nav>

      <p className="copyright">© 2022 — 2023 IGNAT. Усі права захищені.</p>

        </div>

    </section>
  );
};
