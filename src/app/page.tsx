import Heading from "@/components/Heading";
import ScrollButton from "@/components/ScrollButton";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const backgroundImage = "https://images.squarespace-cdn.com/content/v1/53c30017e4b0a643a8ff7a11/74a65ab8-7a89-46f7-b4f1-fb79d07edba6/Morning_InTheGulf_rxoknt_epiynf.jpg";

  return (
    <div className="relative">
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional: Dark overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            {/* <h1 className="text-9xl font-bold mb-4 gradient-text fade-in-up">The Artistic Arsenal</h1> */}
            <Heading headingText="The Artistic Arsenal" />
            <p className="text-lg max-w-2xl mx-auto">
                Enter the world of art and creativity
            </p>
        </div>

        {/* Scroll Button */}
        <ScrollButton targetId="know-more" />

        {/* "Know More" Section */}
        <div id="know-more" className="p-10 bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">Know More About Our Offerings</h2>
          <p className="text-lg mb-4">
            Discover our art classes, workshops, and more. We offer a wide range of activities to help you explore your creativity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Art Classes</h3>
              <p>Join our art classes and unleash your inner artist. We offer sessions for all levels.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Workshops</h3>
              <p>Participate in our workshops to learn new techniques and connect with other artists.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Exhibitions</h3>
              <p>Explore our latest exhibitions and see the work of talented artists from around the world.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Art Classes</h3>
              <p>Join our art classes and unleash your inner artist. We offer sessions for all levels.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Workshops</h3>
              <p>Participate in our workshops to learn new techniques and connect with other artists.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">Exhibitions</h3>
              <p>Explore our latest exhibitions and see the work of talented artists from around the world.</p>
            </div>
          </div>
        </div>
    </div>

    </div>
  );
}
