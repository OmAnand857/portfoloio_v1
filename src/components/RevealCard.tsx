"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Highlight } from "./ui/hero-highlight";

export function CanvasRevealEffectDemo() {
  return (
    <section >
    <h1 className="text-center text-4xl tracking-widest md:text-5xl pt-20">
        My <Highlight>approach</Highlight>
      </h1>
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-[#000319] w-full gap-8 mx-auto px-8 md:px-12">
      <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
            containerClassName="bg-emerald-900 overflow-hidden"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // change bg-black to bg-pink-900
            containerClassName="bg-pink-900  overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600  overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
    </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  des,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  des:string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={ ()=>setHovered(!hovered) }
      className="border border-black/[0.2] dark:border-white/[0.2] group/canvas-card flex flex-col items-center justify-center max-w-sm w-full mx-auto p-6 relative h-[22rem] transition-all duration-300 bg-white dark:bg-[#1a1a2e] shadow-lg "
    >
      {/* Decorative Icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon & Title Section */}
      <div className="relative z-20 flex flex-col items-center">
        <div
          className={`transition duration-300 w-full flex items-center justify-center ${hovered ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
            }`}
        >
          {icon}
        </div>
        <h2
          className={`text-lg font-semibold relative z-10 text-white mt-4 transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0"
            }`}
        >
          {title}
        </h2>
        <p
          className={`text-sm relative z-10 mt-4 text-center transition duration-200 ${hovered ? "opacity-100 -translate-y-2 text-white" : "opacity-0"
            }`}
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
    return (
      <div>
        <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
          <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
           bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
          />
          <span
            className="inline-flex h-full w-full cursor-pointer items-center 
          justify-center rounded-full bg-white dark:bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
          >
            {order}
          </span>
        </button>
      </div>
    );
  };
  

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
