"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export function ColourfulText({ texts }: { texts: string[] }) {
  const colors = [
    "rgb(131, 179, 32)",
    "rgb(47, 195, 106)",
    "rgb(42, 169, 210)",
    "rgb(4, 112, 202)",
    "rgb(107, 10, 255)",
    "rgb(183, 0, 218)",
    "rgb(218, 0, 171)",
    "rgb(230, 64, 92)",
    "rgb(232, 98, 63)",
    "rgb(249, 129, 47)",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentColors, setCurrentColors] = useState(colors);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change words every 3 seconds

    const colorInterval = setInterval(() => {
      setCurrentColors([...colors].sort(() => Math.random() - 0.5));
    }, 3000); // Shuffle colors every 5 seconds

    return () => {
      clearInterval(textInterval);
      clearInterval(colorInterval);
    };
  }, [texts]);

  return (
    <motion.div
      key={currentTextIndex} // Forces re-render when text changes
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
      className="inline-block"
    >
      {texts[currentTextIndex].split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          animate={{
            color: currentColors[index % currentColors.length],
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
            filter: ["blur(0px)", "blur(3px)", "blur(0px)"],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="inline-block font-sans tracking-tight"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
