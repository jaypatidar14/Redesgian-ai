import React from "react";
import Marquee from "./ui/marquee";
import { BorderBeam } from "./ui/border-beam";
import TypingAnimation from "./ui/typing-animation";
import WordPullUp from "./ui/word-pull-up";

function Story() {
  const storyItems = [
    {
      img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Fstory_2.png&w=640&q=75",
      alt: "Innovation",
      title: "Combining Innovation with Efficiency",
      text: "Our platform combines a free Applicant Tracking System (ATS) with AI-driven tech assessments. This allows you to evaluate candidates quickly and accurately, regardless of their background or the complexity of the role. We are committed to leveraging the latest technology to streamline the recruitment process and reduce bias.",
    },
    {
      img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Fstory_3.png&w=640&q=75",
      alt: "Democratizing Tools",
      title: "Democratizing Recruitment Tools",
      text: "We believe in democratizing access to powerful recruitment tools, making them available to both startups and established companies alike. Our goal is to level the playing field, ensuring that every organization, regardless of size, can compete for and secure the best talent available.",
    },
    {
      img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Fstory_3.png&w=640&q=75",
      alt: "Democratizing Tools",
      title: "Democratizing Recruitment Tools",
      text: "We believe in democratizing access to powerful recruitment tools, making them available to both startups and established companies alike. Our goal is to level the playing field, ensuring that every organization, regardless of size, can compete for and secure the best talent available.",
    },
    {
      img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Fstory_3.png&w=640&q=75",
      alt: "Democratizing Tools",
      title: "Democratizing Recruitment Tools",
      text: "We believe in democratizing access to powerful recruitment tools, making them available to both startups and established companies alike. Our goal is to level the playing field, ensuring that every organization, regardless of size, can compete for and secure the best talent available.",
    },
    {
      img: "https://everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2Fstory_3.png&w=640&q=75",
      alt: "Democratizing Tools",
      title: "Democratizing Recruitment Tools",
      text: "We believe in democratizing access to powerful recruitment tools, making them available to both startups and established companies alike. Our goal is to level the playing field, ensuring that every organization, regardless of size, can compete for and secure the best talent available.",
    },
  ];
  return (
    <div>
      <section className="text-center md:py-20 py-8 my-4">
        <h2 className="text-2xl font-bold font-sans text-violet-700 py-4 md:py-5">
          Our Story
        </h2>
        <WordPullUp
          className="text-gray-500 font-sans dark:text-gray-400 max-w-3xl mx-auto py-1 md:py-3 text-3xl"
          words=" We not only make the world's most comfortable hammocks, but through
          training and sustainable job creation, we empower our weavers and
          their families to break the cycle of poverty and build a brighter
          future."
        />
      </section>

      <section className="relative px-4 w-full overflow-hidden md:py-40">
        <Marquee pauseOnHover className="[--duration:30s] flex space-x-8">
          {storyItems.map((item, index) => (
            <div
              key={index}
              className="relative w-max rounded-lg shadow-lg overflow-hidden"
            >
              <img src={item.img} alt={item.alt} className="w-full h-auto" />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 p-8 text-center">
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-justify">{item.text}</p>
              </div>
              <BorderBeam
                size={250}
                duration={15}
                delay={20}
                borderWidth={4.0}
              />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r  dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l  dark:from-background"></div>
      </section>
    </div>
  );
}

export default Story;
