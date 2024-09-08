import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local';

const RobotoLight = localFont({ src: '../fonts/Roboto-Light.ttf' })

export default function AboutMeSection() {
    return (
        <div className="relative p-16 rounded-lg mx-auto mt-10">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left Side: Text */}
                <div className="lg:w-2/3 p-24">
                    <h2 className={`${RobotoLight.className} text-3xl font-extrabold text-bright-pink`}>Hey, I'm Bhavnoor</h2>
                    <p className={`${RobotoLight.className} mt-4 text-base font-medium text-bistre`}>
                        — a Software Engineer with a lifelong passion for art. I've been painting since I was 5, exploring mediums like pencil colours, watercolours, acrylics, and oils. My love for experimenting with different styles and mixed media keeps my creative spirit alive. I’m also a proud recipient of a National Level Scholarship from CCRT, New Delhi.
                    </p>
                    <p className={`${RobotoLight.className} mt-4 text-base font-medium text-bistre`}>
                        Want to know more about my journey and artworks?
                    </p>
                    <Link href="/about">
                        <button className={`${RobotoLight.className} text-sm font-medium mt-8 px-6 py-2 bg-transparent rounded-lg border border-tiffany-blue`}>
                            Read More
                        </button>
                    </Link>
                </div>
                {/* Right Side: Image */}
                <div className="relative w-1/4 h-96">
                    <Image
                        src="/Bhavnoor.jpeg"
                        alt="Bhavnoor Kaur"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-3xl"
                    />
             </div>
            </div>
        </div>
    );
}
    