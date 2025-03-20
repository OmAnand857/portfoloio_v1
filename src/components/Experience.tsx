import React from "react";
import { workExperience } from "@/constants/staticData";
import { Button } from "./ui/moving-borders";
import { Highlight } from "./ui/hero-highlight";

const Experience = () => {
  return (
    <div className="py-10 px-10 w-full">
      <h1 className="text-center text-4xl tracking-widest md:text-5xl pt-20">
        My <Highlight className="text-purple">work experience</Highlight>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border border-white/30 dark:border-white/10 
              bg-white/20 dark:bg-black/20 
              backdrop-blur-lg shadow-lg
              bg-[linear-gradient(90deg,_rgba(255,255,255,0.2)_0%,_rgba(220,220,250,0.2)_100%)] 
              dark:bg-[linear-gradient(90deg,_rgba(4,7,29,0.5)_0%,_rgba(12,14,35,0.5)_100%)]"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-gray-700 dark:text-white mt-3 font-semibold">
                  {card.desc}
                </p>
                <div className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-xl blur-xl opacity-20" />
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
