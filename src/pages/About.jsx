import React from 'react'
import { AboutSectionData } from '../constants';
import AboutSection from '../components/ui/AboutSection';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full relative text-[#fff] bg-center bg-cover min-h-[50vh] bg-about-section">
        <div className="w-hero absolute text-left text-text top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <h1 className="text-[36px] font-semibold text-center">About Us</h1>
        </div>
      </section>

      {/* About Section */}

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
  )
}

export default About