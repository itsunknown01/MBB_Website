import React from 'react'
import Courses from '../components/ui/Courses'

const Course = ({mobile}) => {
  return (
   <>
     {/* Hero Section */}
     <section className="min-h-9 w-full relative bg-center bg-cover min-h-[50vh] bg-cour-section">
        <div className="w-hero absolute text-left text-text top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <h1 className="text-[36px] font-semibold mt-[100px] text-center">Our Courses</h1>
        </div>
      </section>

      <Courses mobile={mobile}/>
   </>
  )
}

export default Course
