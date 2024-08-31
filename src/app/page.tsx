import ArtWorks from "@/app/components/ArtWorksSection";
import Heading from "@/app/components/Heading";
import ScrollButton from "@/app/components/ScrollButton";
import AboutMeSection from "./components/AboutMeSection";

import localFont from 'next/font/local';

const CloudCondensed = localFont({ src: '/fonts/Cloud-Condensed.ttf' });

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

        <AboutMeSection />

        <ArtWorks />
    </div>

    </div>
  );
}
