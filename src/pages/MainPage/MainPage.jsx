import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Catalog } from "../../components/Catalog/Catalog";
import { HotAssortment } from "../../components/HotAssortment/HotAssortment";

const MainPage = () => {
  return (
    <main>
      <Hero />
      <Catalog/>
      <HotAssortment/>
    </main>
  );
};

export default MainPage;
