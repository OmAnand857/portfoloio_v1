"use client";

import React from "react";
import Image from "next/image"; // ✅ Use optimized images
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Highlight } from "./ui/hero-highlight";
import { testimonials } from "@/constants/staticData";
import { companies } from "@/constants/staticData";

export function InfiniteMovingCardsDemo() {
  return (
    <section id="testimonials" className="py-10">
      <h1 className="text-center text-4xl tracking-widest md:text-5xl pt-20">
        Kind words from
        <Highlight className="text-purple"> satisfied clients</Highlight>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="min-h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials} 
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center w-full justify-center bg-[#000319] gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.img}
                  alt={company.name}
                  width={40}
                  height={40}
                  className="md:w-10 w-5"
                  priority 
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={40}
                  className="md:w-24 w-20"
                  priority
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
