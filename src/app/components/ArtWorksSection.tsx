"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

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
    <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">ILLUSTRATIONS</h2>
            <div className="overflow-hidden relative" ref={scrollRef}>
                <div className="flex overflow-hidden space-x-0">
                    <div className="flex animate-scroll">
                        {illustrations.map((illustration, index) => (
                            <div
                                key={index}
                                className="relative w-96 h-80 mx-4 bg-gray-200 overflow-hidden rounded-lg group"
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

                    <div className="flex animate-scroll" aria-hidden="true">
                        {illustrations.map((illustration, index) => (
                            <div
                                key={index}
                                className="relative w-96 h-80 mx-4 bg-gray-200 overflow-hidden rounded-lg group"
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
            <Link href="/artworks">
                <button className="mt-8 px-6 py-2 bg-transparent text-black font-semibold rounded-lg border border-black">
                    Know More
                </button>
            </Link>
            
        </div>
    </div>
);
}
