import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Catalog } from "../../components/Catalog/Catalog";
import { HotAssortment } from "../../components/HotAssortment/HotAssortment";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import { Reviews } from "../../components/Reviews/Reviews";

const MainPage = () => {
  return (
    <main>
      <Hero />
      <Catalog/>
      <HotAssortment/>
      <Subscribe/>
      <Reviews/>
    </main>
  );
};

export default MainPage;
