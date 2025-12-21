import React from "react";
import bgImage from "../assets/aboutus.png";

const AboutUs = () => {
  return (
    <div className="bg-blue-50 py-16 px-6 md:px-20">

   
      <h2 className="text-center text-blue-400 text-sm font-semibold tracking-widest mb-6">
        ABOUT US: WHO WE ARE!
      </h2>
      <div className="flex justify-center mb-12">
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={bgImage}
            alt="About Us"
            className="rounded shadow-lg max-w-full h-auto"
          />
        </div>

        <div className="flex-1 text-gray-700 space-y-6">
          <p>
            LocalBite is a modern food discovery and ordering platform 
            that helps people explore local restaurants and enjoy a 
            seamless ordering experience.
          </p>

          <p>
           LocalBite aims to create a friendly student-community
           platform where anyone can share extra portions of home-cooked food 
           or discover affordable meals nearby. The platform focuses on:
          </p>

          <p>
          </p>

           <ul className="list-disc list-inside space-y-2">
              <li>Encouraging community bonding</li>
              <li>Reducing food waste</li>
              <li>Offering budget-friendly food options for students</li>
              <li>Homemade dips and specialties</li>
              <li>Supporting local home-based cooks</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
