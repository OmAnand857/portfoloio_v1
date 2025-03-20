import React from "react";
import { FlipWords } from "./ui/flip-words";
import { ColourfulText } from "@/components/ui/colourful-text";

export function HireMe() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className=" py-20 flex justify-center items-center px-4">
      <div className="text-4xl text-center mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build {" "}
        <span className=" text-6xl md:text-8xl"><ColourfulText texts={ words } /></span> { " " }<br/>
        websites with Om Anand
      </div>
    </div>
  );
}
