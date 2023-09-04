import React from "react";

import {
  AboutSectionData,
  CampusImage,
  TestimonialData,
} from "../data/constant";
import AboutSection from "../components/ui/AboutSection";
import Courses from "../components/ui/Courses";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-9 w-full relative bg-center bg-cover min-h-92 bg-hero-section">
        <div className="w-hero absolute text-left text-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <h1 className="text-6xl pb-2">Mahatma Balya Bhawan</h1>
          <p className="mx-0 mt-2.5 mb-10 text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus
            urna. Amet commodo nulla <br /> facilisi nullam. Non blandit massa
            enim nec dui nunc. Blandit aliquam etiam erat velit scelerisque in
            dictum.
          </p>
          <a
            href="/blog/:id"
            className="text-xs inline-block bg-transparent relative px-8 py-3 border-2 text-white border-white hover:bg-red-600 hover:border-red-600 transition hover:duration-1000"
          >
            Visit Us To Know More
          </a>
        </div>
      </section>

      {/* About */}

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

      <Courses />

      {/* Campus */}

      <section className="w-4/5 m-auto text-center">
        <h1 className="text-4xl font-semibold">Our Campus</h1>
        <p className="text-sm font-semibold p-2.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <div className="mt-row flex justify-between text-center">
          {CampusImage.map((item, index) => (
            <div
              key={index}
              className="basis-size rounded-xl mb-8 relative overflow-hidden"
            >
              <img src={item.image} alt="campus" className="w-full block" />
              <div className="layer">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}

      <section className="w-4/5 m-auto p-[100px] text-center">
        <h1 className="text-[36px] font-semibold">Testimonials</h1>

        <p className="text-[#777] text-[14px] font-light leading-[22px] p-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-row flex justify-between text-center">
          {TestimonialData.map((testimonial) => (
            <div
              key={testimonial.name}
              className="basis-[44%] rounded-[10px] mb-[5%] text-left bg-[#fff3f3] p-[25px] cursor-pointer flex"
            >
              <img
                src={testimonial.image}
                alt="student"
                className="h-[40px] ml-[5px] mr-[30px] rounded-[50%]"
              />
              <div>
                <p className="text-[#777] text-[14px] font-light leading-[22px] p-0">
                  {testimonial.content}
                </p>
                <h3 className="mt-[15px] text-left">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="m-[100px_auto] w-[80%] bg-cta bg-center bg-cover rounded-[10px] text-center p-[100px_0]">
        <h1 className="text-text mb-[40px] p-0">
          Enroll for our various Courses
        </h1>
        <Link
          href="/"
          className="inline-block no-underline text-[#fff] border-[1px_solid_#fff] p-[12px_34px] text-[13px] relative cursor-pointer "
        >
          Contact Us
        </Link>
      </section>

    </>
  );
};

export default Home;
