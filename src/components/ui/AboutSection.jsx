import React from "react";

const AboutSection = ({ pattern, title, content, image }) => {
  const isLeft = pattern === "left";

  return (
    <section className="w-4/5 mx-auto my-0">
      <div
        className={`mt-row flex justify-between text-center ${
          isLeft ? "flex-row-reverse" : ""
        }`}
      >
        <div className="basis-1/2 flex flex-col justify-center items-center">
          <h1 className=" text-4xl font-semibold mb-12">{title}</h1>
          <p className="text-sm font-light leading-6 px-20 pt-2 pb-6">{content}</p>
          <a
            href="/blog/:id"
            className="no-underline text-xs inline-block bg-transparent relative px-8 py-3 border-2 text-red-600 border-red-600 hover:bg-red-600 hover:border-red-600 transition hover:duration-1000 hover:text-white"
          >
            EXPLORE NOW
          </a>
        </div>
        <div className=" basis-1/2 flex flex-col justify-center items-center">
          <img src={image} alt="about" className="w-4/5 object-contain"/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
