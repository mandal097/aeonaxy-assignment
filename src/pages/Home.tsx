import React from "react";
import Hero from "../components/Sections/Hero";
import FAQs from "../components/Sections/FAQs";
import Banner from "../components/Sections/Banner";
import Categories from "../components/Sections/Categories";

const Home = () => {
  return (
    <div className="pt-[var(--padding)] flex flex-col h-auto">
      <div className="flex flex-col">
        <Hero />
        <Categories />
        <FAQs />
        <Banner />
      </div>
    </div>
  );
};

export default Home;
