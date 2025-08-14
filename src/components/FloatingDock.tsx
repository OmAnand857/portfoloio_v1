"use client";
import React, { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMessageChatbot,
} from "@tabler/icons-react";
import Chatbot from "./Chatbot";

const FloatingDockDemo = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/om-anand-390749284",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/OmAnand857",
    },
    {
      title: "Chatbot",
      icon: (
        <div onClick={toggleChatbot} className="h-full w-full flex items-center justify-center cursor-pointer">
          <IconMessageChatbot className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        </div>
      ),
      href: "#",
    },
  ];

  return (
    <>
      <div className="fixed bottom-5 left-5 z-50 flex justify-start items-center md:left-0 md:right-0 md:justify-center">
        <FloatingDock items={links} />
      </div>
{isChatbotOpen && (
  <div className="fixed bottom-20 right-5 z-50">
    <Chatbot onClose={() => setIsChatbotOpen(false)} />
  </div>
)}

    </>
  );
};

export default FloatingDockDemo;
