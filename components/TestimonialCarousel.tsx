import React from "react";
import { motion } from "framer-motion";
import Marquee from "./ui/marquee"; // Make sure this import points to the correct Marquee component
import { BorderBeam } from "./ui/border-beam"; // Ensure this import is correct

const TestimonialCarousel = () => {
  // Array of 8 cards with detailed content
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the description for Card 1. Detailed content goes here.",
      img: "../public/verecel.svg",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the description for Card 2. It explains the content in detail.",
      img: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the description for Card 3. Interesting details are shared here.",
      img: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Detailed content for Card 4 with relevant information.",
      img: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      title: "Card 5",
      description: "Card 5 contains descriptive content that highlights its purpose.",
      img: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      title: "Card 6",
      description: "This card provides a comprehensive look at topic 6.",
      img: "https://via.placeholder.com/300",
    },
    {
      id: 7,
      title: "Card 7",
      description: "Card 7 offers insights and key points relevant to the content.",
      img: "https://via.placeholder.com/300",
    },
    {
      id: 8,
      title: "Card 8",
      description: "An engaging description for Card 8 goes here.",
      img: "https://via.placeholder.com/300",
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black p-8"> {/* Set the background to black */}
      {/* Single Marquee Line */}
      <Marquee pauseOnHover className="[--duration:30s] flex space-x-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="relative bg-black border border-zinc-600 rounded-xl shadow-lg overflow-hidden w-64"
            role="article"
            aria-label={`Card ${card.id}`}
            tabIndex={0}
          >
            <img
              src={card.img}
              alt={`Image for ${card.title}`}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 p-4 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-200 text-sm">{card.description}</p>
            </div>
            <BorderBeam size={250} duration={15} delay={20} borderWidth={2.0} />
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
};

export default TestimonialCarousel;
