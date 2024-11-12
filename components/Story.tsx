import React from "react";
import Marquee from "./ui/marquee";
import { BorderBeam } from "./ui/border-beam";
import TestimonialCarousel from "./TestimonialCarousel";
import WordPullUp from "./ui/word-pull-up";
import SaasflyBanner from "./SaaflyBanner";
function Story() {
  return (
    <div className="bg-black">
      {/* Story section */}
      <section className="bg-black text-center md:py-20 py-8 my-4">
        {/* Story title */}
        <h2 className="text-2xl font-bold font-sans text-violet-700 py-4 md:py-5">
          Our Story
        </h2>
        <SaasflyBanner />
        {/* WordPullUp component with story text */}
        <WordPullUp
          className="text-gray-500 font-sans dark:text-gray-400 max-w-3xl mx-auto py-1 md:py-3 text-3xl"
          words="We not only make the world's most comfortable hammocks, but through
          training and sustainable job creation, we empower our weavers and
          their families to break the cycle of poverty and build a brighter
          future."
        />
        
        {/* Testimonial carousel */}
        <TestimonialCarousel />
      </section>
      
      {/* Optional components such as Marquee and BorderBeam */}
      <Marquee className="text-white" text="See what our customers are saying!" />
      <BorderBeam className="my-8" />

    </div>
  );
}

export default Story;

