"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import localFont from 'next/font/local';

const RobotoLight = localFont({ src: '../fonts/Roboto-Light.ttf' })

export default function ArtWorks() {
  const illustrations = [
    { src: "/image-1.jpg", title: "Image - 1" },
    { src: "/image-2.jpg", title: "Image - 2" },
    { src: "/image-3.jpg", title: "Image - 3" },
    { src: "/image-1.jpg", title: "Image - 4" },
    { src: "/image-2.jpg", title: "Image - 5" },
    { src: "/image-3.jpg", title: "Image - 6" },
  ];

  // create infinite loop on carousel
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 1;
        }
      }, 20);

      return () => clearInterval(interval);
    }, []);


return (
    <div className="pt-72 pb-16">
        <div className="container mx-auto px-4 pb-56 text-center border-b-4 border-bright-pink">
            <div className="overflow-hidden relative py-8" ref={scrollRef}>
                <div className="flex overflow-hidden space-x-0">
                    <div className="flex animate-scroll">
                        {illustrations.map((illustration, index) => (
                            <div
                                key={index}
                                className="relative w-96 h-96 mx-4 bg-gray-200 overflow-hidden rounded-lg group"
                            >
                                <Image
                                    src={illustration.src}
                                    alt={illustration.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <h3 className={`${RobotoLight.className} text-2xl font-bold text-white`}>{illustration.title}</h3>
                                    <p className={`${RobotoLight.className} text-lg text-white mt-2`}>Learn more</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex animate-scroll" aria-hidden="true">
                        {illustrations.map((illustration, index) => (
                            <div
                                key={index}
                                className="relative w-96 h-96 mx-4 bg-gray-200 overflow-hidden rounded-lg group"
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
            <div>
                <p className={`${RobotoLight.className} text-lg text-bistre mt-8 py-20 px-16`}>
                    I love to explore a range of mediums and techniques, always looking for new ways to express ideas through art. Whether it's watercolours, acrylics, or mixed media, each piece is an experiment in creativity and form. I enjoy playing with different styles, blending them to create something unexpected and engaging. My art reflects this love for variety, inviting viewers to experience the diverse and evolving nature of my artistic journey.
                </p>
            </div>
            <Link href="/artworks">
                <button className={`${RobotoLight.className} mt-8 px-6 py-2 bg-tiffany-blue text-base text-bistre rounded-xl border border-tiffany-blue  hover:bg-indigo-dye hover:text-almond`}>
                    Explore Artworks
                </button>
            </Link>
            
        </div>
    </div>
);
}
