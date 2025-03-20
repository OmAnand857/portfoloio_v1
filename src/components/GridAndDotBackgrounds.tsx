"use client"
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { TextGenerateEffectLarge, TextGenerateEffectSmall } from "@/components/HeroText";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319]">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      
      {/* Radial gradient for faded effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]" />
      
      {/* Hero Content */}
      <div className="flex flex-col items-center px-5 md:w-2/3 absolute top-10 text-center">
        <h1 className="text-xl uppercase mb-4">Dynamic Web Magic with Next.js</h1>
        <TextGenerateEffectLarge />
        <TextGenerateEffectSmall />
        
        {/* Responsive Image */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mt-6">
          <Image 
            src="/developer.jpeg" 
            alt="Developer" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full shadow-lg "
          />
        </div>
      </div>
    </div>
  );
}
