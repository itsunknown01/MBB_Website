import React from "react";
import { CoursesData } from "../../constants";

const Courses = () => {
  return (
    <section className="w-full m-auto text-center pt-20 bg-text">
      <div className="w-4/5 m-auto">
        <h1 className="text-4xl font-semibold">Course We Offer</h1>
        <p className="text-sm font-light p-2.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        <div className="mt-row flex justify-between text-center gap-5">
          {CoursesData.map((item, index) => (
            <div
              key={index}
              className="course-col"
            >
              <h3>{item.name}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>``
    </section>
  );
};

export default Courses;
