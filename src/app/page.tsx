"use client"
import { GridBackgroundDemo } from "@/components/GridAndDotBackgrounds";
import Scroll from "../components/Scroll";
import { FloatingDockDemo } from "@/components/FloatingDock";
import  Grid  from "../components/Grid";
import { RecentProjects } from "@/components/ProjectCards";
import { TimelineDemo } from "@/components/TimeLine";
import { CanvasRevealEffectDemo } from "@/components/RevealCard";
import {InfiniteMovingCardsDemo} from "@/components/Testimonials";
import  Experience  from "@/components/Experience";
import { HireMe } from "@/components/HireMe";
export default function Page() {
  return (
    <>
      <FloatingDockDemo />
      <GridBackgroundDemo/>
      <Grid/>
      <RecentProjects/>
      <TimelineDemo/>
      <CanvasRevealEffectDemo/>
      <InfiniteMovingCardsDemo/>
      <Experience/>
      <HireMe/>
    </>
  );
}
