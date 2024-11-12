import React from "react";
import Marquee from "./ui/marquee";
import { BorderBeam } from "./ui/border-beam";
import { Infinite } from "./ui/Infinite";

import SaasflyBanner from "./SaaflyBanner";
import { GoogleGeminiEffect } from "../components/ui/GoogleGeminiEffect";
import { LampDemo } from "./ui/Lamp";

function Story(): React.JSX.Element {
  return (
    <div className="bg-black">
      {/* Story section */}
      <GoogleGeminiEffect pathLengths={[]} />
    
      <section className="text-center bg-black py-12 md:py-15 my-4">
        {/* Story title */}
        <LampDemo />
        <Infinite items={[{  id: 1,
        quote: "This is an example quote.",
        name: "John Doe",
        title: "CEO",
        imageUrl: "https://i.pinimg.com/236x/8e/e5/ed/8ee5edf8c3745ae78d92b3e1c57ca289.jpg"  }, { id: 2, quote: "this is quote of  jay ", name: "Jay patidar", title: "CFO", imageUrl:"https://i.pinimg.com/236x/8e/e5/ed/8ee5edf8c3745ae78d92b3e1c57ca289.jpg" }]} />
      </section>
      <section>
   
      </section>
      <SaasflyBanner />
      <section className="p-6">
        {/* Optional components such as Marquee and BorderBeam */}
        <Marquee className="text-white py-4" text="See what our customers are saying!" />
        <BorderBeam className="my-8" />
      </section>
    </div>

  );
}

export default Story;
