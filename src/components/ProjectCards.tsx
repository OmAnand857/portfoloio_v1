"use client";
import React from "react";
import { ThreeDCardDemo } from "./Card";
import { projects } from "../constants/staticData"
import { HeroHighlightText } from "./HeroHighlight";
export function RecentProjects() {
  return (
      <div>
        <HeroHighlightText/>
        <div className="flex flex-wrap mx-auto justify-center ">
          { projects.map( (item ) => <ThreeDCardDemo key={item.id} {...item} /> ) }
        </div>  
      </div>

  );
}
