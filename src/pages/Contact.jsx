import React from "react";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-9 w-full relative bg-center bg-cover min-h-92 bg-hero-section">
        <div className="w-hero absolute text-left text-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          <h1 className="text-[36px] font-semibold mt-[100px]">Contact Us</h1>
        </div>
      </section>

      {/* location */}
      <section className="w-4/5 m-auto py-[80px]">
        <iframe
        className="w-full"
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1334473834304!2d93.95963051235485!3d26.515832276934816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37468e5b62dc9c69%3A0x4b35421005f8d291!2sMahatma%20Balya%20Bhawan%20School!5e0!3m2!1sen!2sin!4v1692219623683!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default Contact;
