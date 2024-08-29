import Image from "next/image";
import Link from "next/link";

export default function AboutMeSection() {
    return (
        <section className="flex items-center justify-between p-8 bg-white mx-32">
            <div className="max-w-4xl">
                <h2 className="text-4xl font-bold text-gray-900">Hey, I'm Bhavnoor</h2>
                <p className="mt-4 text-2xl font-normal text-gray-700">
                — a Software Engineer with a lifelong passion for art. I've been painting since I was 5, exploring mediums like pencil colours, watercolours, acrylics, and oils. My love for experimenting with different styles and mixed media keeps my creative spirit alive. I’m also a proud recipient of a National Level Scholarship from CCRT, New Delhi.
                </p>
                <p className="mt-4 text-2xl font-normal text-gray-700">
                Want to know more about my journey and artworks?
                </p>
                <Link href="/about">
                <button className="mt-8 px-6 py-2 bg-transparent text-black font-semibold rounded-lg border border-black">
                    Read More
                </button>
            </Link>
            </div>
            <div className="relative w-96 h-96">
                <Image
                    src="/Bhavnoor.jpeg"
                    alt="Bhavnoor Kaur"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                />
            </div>
        </section>
    );
}
    