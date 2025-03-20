"use client";
import { motion } from "motion/react";
import { Highlight } from "./ui/hero-highlight";

export function HeroHighlightText() {
  return (
        <div className="flex flex-col items-center justify-center text-center text-4xl mx-auto w-full">
        <h4 className=" tracking-widest mb-4">Innovate | Create | Showcase</h4>
            <div>
                <Highlight className="text-black tracking-widest dark:text-white">
                    My Projects in Action!
                </Highlight>                 
            </div>
        </div>
  );
}
