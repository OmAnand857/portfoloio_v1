"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { wordsLarge , wordsSmall  } from "../constants/staticData";

export function TextGenerateEffectLarge() {
  return <TextGenerateEffect words={wordsLarge} textSize={"large"} />;
}

export function TextGenerateEffectSmall() {
  return <TextGenerateEffect words={wordsSmall}  textSize={"small"} />;
}