import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div className="pt-28 py-16 bg-gray-100 relative">
            <div className="container mx-auto px-4">
                <section className="flex items-center justify-between p-8 mx-32">
                    <div className="max-w-4xl">
                        <h2 className="text-4xl font-bold text-gray-900">Hello!</h2>
                        <p className="mt-4 text-xl font-normal text-gray-700">
                        Hello! I'm Bhavnoor, a Software Engineer by profession and an artist by passion. My journey with art began when I was just 5 years old, and since then, the paintbrush has been my most loyal companion. Over the years, I’ve trained in a variety of art mediums, including pencil colours, watercolours, acrylics, and oil paints. I find immense joy in exploring different styles and pushing the boundaries of creativity with mixed media experiments.
                        </p>
                        <p className="mt-4 text-xl font-normal text-gray-700">
                            Art, for me, is more than just a hobby; it’s a way of life. Whether it’s the precision required in pencil sketches or the fluidity of watercolours, each medium offers a unique avenue for expression. I am continually inspired to innovate and blend techniques, creating pieces that resonate with my journey as both an engineer and an artist.
                        </p>
                        <p className="mt-4 text-xl font-normal text-gray-700">
                            One of the milestones in my artistic journey was being awarded a National Level Scholarship from CCRT, New Delhi. Being one of only 65 people across India to receive this recognition has been a humbling and motivating experience.
                        </p>
                        <p className="mt-4 text-xl font-normal text-gray-700">
                            Through this website, I hope to share my creations, offer insights into my artistic process, and provide information about the workshops I host. Whether you’re here to explore my art or join me in a workshop, I’m excited to connect with fellow art lovers and creators.
                        </p>
                        <p className="mt-4 text-xl font-normal text-gray-700">
                            Thank you for visiting my artistic world!
                        </p>
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
            </div>
        </div>
    )
}