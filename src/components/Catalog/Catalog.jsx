import React from "react";
import sportsman1x from "../../img/sportsman-1x.jpg";
import sportsman2x from "../../img/sportsman-2x.jpg";
import "./catalog.scss";
import { Link } from "react-router-dom";

export const Catalog = () => {
  return (
    <section className="catalog-section container">
      <div className="enter-catalog">
        <h2 className="catalog-title">
          Ми знаємо, що сподобається вашим "великим" друзям!
        </h2>
        <p className="catalog-text">
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
          термобілизни "Big warm"
        </p>
        <Link to="#" className="enter-catalog-btn" >До каталогу</Link>
      </div>
      <picture>
        <source srcSet={`${sportsman1x} 1x, ${sportsman2x} 2x`} />
        <img src={sportsman1x} alt="sportsman" className="sportsman-img" />
      </picture>
    </section>
  );
};
