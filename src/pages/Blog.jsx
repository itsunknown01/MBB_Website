import React from "react";
import { BlogContentData, BlogCoursesData } from "../constants";
import certificate from "../assests/images/certificate.jpg";

const Blog = () => {
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

      {/* Blogs */}

      <section className="w-4/5 m-auto p-[60px]">
        <div className="mt-[5%] flex justify-center text-center">
          <div className="basis-[65%]">
            <img src={certificate} alt="certificate" className="w-full" />
            <h2 className="text-[#222]">
              Our Certificate & Online Programs for 2023
            </h2>
            {BlogContentData.map((content) => (
              <p key={content.title} className="text-[#999] mb-2">
                {content.content}
              </p>
            ))}

            <div className="border-[1px_solid_#ccc] my-[50px] mx-0 p-[10px_20px]">
              <h3 className="text-left">Leave a comment</h3>
              <form>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full p-[10px] m-[15px_0] box-border border-none outline-none bg-[#f8f8f8]"
                />
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="w-full p-[10px] m-[15px_0] box-border border-none outline-none bg-[#f8f8f8]"
                />
                <textarea
                  rows="5"
                  placeholder="Your comment"
                  className="w-full p-[10px] m-[15px_0] box-border border-none outline-none bg-[#f8f8f8]"
                />
                <button
                  type="submit"
                  className="inline-block no-underline text-[#f44336] border-[#f44336] border-[1px] border-solid py-3 px-[34px] text-[13px] bg-[transparent] relative cursor-pointer hover:bg-[#f44336] hover:transition-[1s] hover:text-[#fff] m-[10px_0]"
                >
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
          <div className="basis-[32%]">
            <h3 className="bg-[#f44336] text-[#fff] py-[7px] px-0 text-[16px] mb-[20px]">
              Post Categories
            </h3>
            {BlogCoursesData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center color-[#555] p-2 box-border"
              >
                <span component="span">{item.name}</span>
                <span component="span">{item.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
