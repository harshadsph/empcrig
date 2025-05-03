// src/components/Aboutus.js
import Image from 'next/image';

const Aboutus = ({ title, subtitle, image }) => {
    return (

        <div className="p-20 aboutus-background bg-transparent w-full">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center px-6 py-16 gap-10 text-hexgrey">
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-7xl font-bold md:text-7xl font-bold leading-tight ">
                        {title} 
                    </h1>
                    <h1 className="text-7xl font-bold md:text-7xl font-bold leading-tight ">
                    {subtitle}
                    </h1>
                    <h2 className="text-4xl my-6">Meet the Founder</h2>
                    <p className="max-w-4xl text-lg leading-relaxed mb-4">
                        I was born in the vibrant city of <strong>Nagpur</strong>, where colors, festivals, and stories wove themselves into everyday life.
                        Growing up, I was always drawn to the way visuals could speak louder than words—how a poster, a logo, or even a doodle could ignite emotion, curiosity, and connection.
                    </p>
                    <p className="max-w-4xl text-lg leading-relaxed mb-4">
                        My path led me to <strong>Singapore</strong>, a city that redefined creativity for me. It’s here that I honed my craft, graduating with a degree in Graphic Design,
                        and truly discovered the power of thoughtful, intentional design. The blend of discipline, diversity, and innovation in this city
                        lit a spark within me—one that pushed me to explore beyond aesthetics and into purpose-driven storytelling.
                    </p>
                    <p className="max-w-4xl text-lg leading-relaxed mb-4">
                        After years of working with brands and gaining hands-on experience in everything from branding and motion design to sustainability-focused campaigns,
                        I realised I didn’t just want to create—I wanted to empower others to do the same.
                    </p>
                    <p className="max-w-4xl text-lg leading-relaxed">
                        That’s when <strong>Empcrig</strong> was born.
                    </p>
                </div>
                <div className="flex-1 flex justify-center pt-20">
                    <Image
                        src="/images/profile.png" // Update this to your image file
                        alt="Founder"
                        width={800}
                        height={800}
                        className="rounded-full object-cover"
                    />
                </div>
            </section>

        </div>
    );
};

export default Aboutus;
