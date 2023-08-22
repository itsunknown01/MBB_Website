import React from "react";
import HeroSection from "../components/ui/HeroSection";
import { AboutSectionData } from "../data/constant";
import AboutSection from "../components/ui/AboutSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="m-auto pt-10 pb-20">
        {AboutSectionData.map((section, index) => {
          const pattern = index % 2 === 0 ? "left" : "right";

          return (
            <AboutSection
              key={index}
              pattern={pattern}
              title={section.title}
              content={section.content}
              image={section.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
