import Image from "next/image";
import { FaLock, FaThumbsUp } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { LuRocket } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import ShinyButton from "./ui/shiny-button";
import clsx from "clsx";
import { BentoCard, BentoGrid } from "./ui/bento-grid";

const features = [
  {
    Icon: FaThumbsUp,
    name: "Customer Success",
    description: "Your success is our success.",
    background: (
      <img src="" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    href: "",
    cta: "",
    borderColor: {
      light: "border-cyan-700",
      dark: "dark:border-white",
    },
  },
  {
    Icon: GoStack,
    name: "Simplicity",

    description:
      " We believe that great technology should be intuitive and easy to use. ",
    background: (
      <img src="" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-1 lg:row-start-3 lg:row-end-5",
    href: "",
    cta: "",
    borderColor: {
      light: "border-cyan-700",
      dark: "dark:border-cyan-700",
    },
  },
  {
    Icon: IoEyeOutline,
    name: "Transparency",

    description:
      "Your success is our success. We are devoted to providing exceptional support and resources to help you achieve your hiring goals.",
    background: (
      <img src="" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-5",
    href: "",
    cta: "",
    borderColor: {
      light: "border-cyan-700",
      dark: "dark:border-cyan-700",
    },
  },
  {
    Icon: LuRocket,
    name: "Innovation",

    description: "We are committed to continuously improving our technology.",
    background: <img src="" className="absolute object-cover opacity-80" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    href: "",
    cta: "",
    borderColor: {
      light: "border-cyan-700",
      dark: "dark:border-cyan-700",
    },
  },
  {
    Icon: MdOutlinePeopleAlt,
    name: "Inclusivity",

    description:
      "We empower every candidate to present their unique strengths and capabilities.",
    background: (
      <img src="" className="absolute -right-20 -top-20 opacity-60" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-5",
    href: "",
    cta: "",
    borderColor: {
      light: "border-cyan-700",
      dark: "dark:border-cyan-700",
    },
  },
  {
    Icon: FaLock,
    name: "Security",

    description: "We prioritize the protection of your data.",
    background: <img src="" className="absolute object-cover opacity-80" />,
    className: "lg:col-start-4 lg:col-end-4 lg:row-start-1 lg:row-end-5",
    href: "",
    cta: "",
    borderColor: {
      light: "border-cyan-700",
      dark: "dark:border-cyan-700",
    },
  },
];

export default function Values() {
  return (
    <section className="py-6 md:px-32 bg-white dark:bg-black text-zinc-900 dark:text-white relative overflow-hidden z-10 ">
      <div>
        <div className="text-center  py-8 my-4">
          <div>
            <div className="text-2xl font-sans font-bold text-violet-700 dark:text-violet-500 py-4 md:py-5">
              Our Values
            </div>
            <h4 className="text-gray-500 font-sans dark:text-gray-400 max-w-3xl mx-auto py-1 md:py-3 text-2xl">
              At Everything Talent, our core values drive everything we do
            </h4>
          </div>
        </div>
        <div>
          <BentoGrid className="lg:grid-rows-5 grid-flow-col">
            {features.map((feature, index) => (
              <BentoCard
                key={index}
                {...feature}
                className={clsx(
                  feature.className,
                  "border",
                  feature.borderColor.light, // Light mode border color
                  feature.borderColor.dark // Dark mode border color
                )}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
