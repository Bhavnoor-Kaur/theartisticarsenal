import Image from "next/image";
import Link from "next/link";
import localFont from 'next/font/local';

const RobotoLight = localFont({ src: '../fonts/Roboto-Light.ttf' })

export default function AboutMeSection() {
    return (
        <div className="relative py-32 px-40 rounded-lg mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left Side: Text */}
                <div className="lg:w-2/3 p-24">
                    <h2 className={`${RobotoLight.className} text-4xl font-extrabold text-bistre`}>
                        Hey, I'm <span className="text-bright-pink"> Bhavnoor </span>
                    </h2>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 rounded-xl bg-almond text-indigo-dye hover:bg-melon">Software Engineer</button>
                        <button className="px-4 py-2 rounded-xl bg-almond text-indigo-dye hover:bg-melon">Artist</button>
                        <button className="px-4 py-2 rounded-xl bg-almond text-indigo-dye hover:bg-melon">Dancer</button>
                    </div>
                    <p className={`${RobotoLight.className} mt-4 text-base font-medium pt-16 text-bistre`}>
                        — a Software Engineer with a lifelong passion for art. I've been painting since I was 5, exploring mediums like pencil colours, watercolours, acrylics, and oils. My love for experimenting with different styles and mixed media keeps my creative spirit alive. I'm also a trained Kathak dancer and love exploring various dance styles. I believe that art is a form of expression that transcends boundaries and connects people from different walks of life. I'm excited to share my journey with you and hope you enjoy my work as much as I enjoy creating it.
                    </p>
                    <p className={`${RobotoLight.className} mt-4 pt-16 text-base font-medium text-bistre`}>
                        Want to know more about my journey and artworks?
                    </p>
                    <Link href="/about">
                        <button className={`${RobotoLight.className} text-base text-bistre bg-tiffany-blue font-medium mt-8 px-6 py-2 rounded-xl border border-tiffany-blue hover:bg-indigo-dye hover:text-almond`}>
                            Read More
                        </button>
                    </Link>
                </div>
                {/* Right Side: Image */}
                <div className="relative w-100 h-125">
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
    