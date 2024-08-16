"use client"; // Mark this component as a client component

import Image from "next/image";
import { useState } from "react";

// Define the type for the illustrations
type Illustration = {
  src: string;
  title: string;
};

// Sample illustration data
const illustrations: Illustration[] = [
    { src: "/image-1.jpg", title: "Image - 1" },
    { src: "/image-2.jpg", title: "Image - 2" },
    { src: "/image-3.jpg", title: "Image - 3" },
    { src: "/image-1.jpg", title: "Image - 4" },
    { src: "/image-2.jpg", title: "Image - 5" },
    { src: "/image-3.jpg", title: "Image - 6" },
    { src: "/image-1.jpg", title: "Image - 4" },
    { src: "/image-2.jpg", title: "Image - 5" },
    { src: "/image-3.jpg", title: "Image - 6" },
  // Add more images as needed
];

export default function Illustrations() {
  return (
    <div className="pt-28 py-16 bg-gray-100 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">ILLUSTRATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {illustrations.map((illustration, index) => (
            <div
              key={index}
              className="relative w-full h-80 bg-gray-200 overflow-hidden rounded-lg group"
            >
              <Image
                src={illustration.src}
                alt={illustration.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3 className="text-2xl font-bold text-white">{illustration.title}</h3>
                <p className="text-lg text-white mt-2">Learn more</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
