import React from 'react'
import Courses from '../components/ui/Courses'

const Course = () => {
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

      <Courses/>
   </>
  )
}

export default Course
