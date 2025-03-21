import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { data } from "@/constants/staticData"
export function TimelineDemo() {

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
