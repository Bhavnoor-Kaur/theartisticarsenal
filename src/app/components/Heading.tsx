"use client";

import { useState, useEffect } from "react";
import localFont from 'next/font/local';

const AdleryProFont = localFont({ src: '../fonts/Adlery-Pro.ttf' })

interface HeadingProps {
  headingText: string;
}

export default function Heading({ headingText }: HeadingProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("know-more");
      if (element) {
        const rect = element.getBoundingClientRect();
        // Trigger fade-out when the top of the "Know More" section reaches the viewport
        setIsVisible(rect.top > window.innerHeight * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // TODO: Add the disappear animation on scroll
    <h1 className={`${AdleryProFont.className} text-9xl mx-auto drop-shadow-2xl text-indigo-dye transition-opacity duration-1000 ${isVisible ? "opacity-100 fade-in-up" : "opacity-0"}`}>
      {headingText}
    </h1>
  );
}
