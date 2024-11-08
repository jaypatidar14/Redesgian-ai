import React from "react";
import SparklesText from "./ui/sparkles-text";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import GradualSpacing from "./ui/gradual-spacing";
import FlickeringGrid from "./ui/flickering-grid";
import RetroGrid from "./ui/retro-grid";
import Meteors from "./ui/meteors";

function Main() {
  return (
    <div className=" py-24 md:py-52">
      <GradualSpacing
        className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
        duration={2.5}
        text=" Everything Talent"
      />
      <GradualSpacing
        className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
        text="simplifies hiring"
        duration={2.5}
      />
      <GradualSpacing
        className="font-display text-center text-4xl font-bold -tracking-widest text-violet-700 dark:text-violet-700 md:text-7xl md:leading-[5rem]"
        text="ATS and AI - driven"
        duration={2.5}
      />
      <GradualSpacing
        className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
        text="assessments."
        duration={2.5}
      />
      <Meteors number={20} />
    </div>
  );
}

export default Main;
