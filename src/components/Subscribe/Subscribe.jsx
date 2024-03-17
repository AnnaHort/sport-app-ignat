import React from "react";
import "./subscribe.scss";

export const Subscribe = () => {
  return (
    <section className="subscribe-section container">
        <div className="subscribe-section-container">
        <h2 className="subscribe-title">Спіймай всі акції!</h2>
      <p className="subscribe-text">
        Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
        будуть з`влятись у нашому магазині. А у нас їх багато :D
      </p>
      <div className="subscribe-input-container">
        <input type="text" className="subscribe-input" placeholder="введіть" />
        <button className="subscribe-submit" type="submit">
          Підписатись
        </button>
      </div>
        </div>
    
    </section>
  );
};
