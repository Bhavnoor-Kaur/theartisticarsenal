import ArtWorks from "@/app/components/ArtWorksSection";
import Heading from "@/app/components/Heading";
import ScrollButton from "@/app/components/ScrollButton";
import AboutMeSection from "./components/AboutMeSection";

import localFont from 'next/font/local';

const CloudCondensed = localFont({ src: '/fonts/Cloud-Condensed.ttf' })

export default function Home() {
  const backgroundImage = "/homepage.png";

  return (
    <div className="relative">
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="relative z-10 flex flex-col items-center justify-center bottom-12  h-full text-center text-white">
            <div className="relative">
              {/* Heading Component */}
              <Heading headingText="The Artistic Arsenal" />
              {/* Paragraph with Overlap */}
              <p className={`${CloudCondensed.className} text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium text-melon mx-auto absolute top-64 sm:top-32 md:top-56 w-full transform -translate-y-1/2 z-0`}>
                By Bhavnoor Kaur
              </p>
            </div>
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

        <AboutMeSection />

        <ArtWorks />
    </div>

    </div>
  );
}
