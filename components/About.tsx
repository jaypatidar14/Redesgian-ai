"use client";
import React from "react";

import Footer from "./Footer";
import Story from "./Story";
import Values from "./Values";

// import Main from "./Main";
import TeamGrid from "./TeamExperts";
import WhatWeDo from "./WhatWeDo";
import StepsAnimation from "./HowItWorks";

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 ">
      {/* Top Section */}
      {/* <Main /> */}

      {/* Our Story */}
      <Story />

      {/* Our Values */}
      <Values />

      <WhatWeDo />

      {/* Our Team Experts Section */}
      <TeamGrid />
      <StepsAnimation />

      {/* Our Culture Section */}
      {/* <Culture /> */}

      {/* Journey Section */}
      {/* <Journey /> */}

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
