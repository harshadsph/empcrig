// src/components/Aboutus.js
import Image from 'next/image';

const Aboutus = ({ title, subtitle, image }) => {
    return (
        <div className="px-6 py-16 md:px-20 aboutus-background bg-transparent w-full text-hexgrey">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center gap-10">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                        {title}
                    </h1>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                        {subtitle}
                    </h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl my-6 font-semibold">
                        Meet the Founder
                    </h3>

                    <div className="space-y-4 text-lg leading-relaxed max-w-4xl mx-auto md:mx-0">
                        <p>
                            I was born in the vibrant city of <strong>Nagpur</strong>, where colors, festivals, and stories wove themselves into everyday life.
                            Growing up, I was always drawn to the way visuals could speak louder than words—how a poster, a logo, or even a doodle could ignite emotion, curiosity, and connection.
                        </p>
                        <p>
                            My path led me to <strong>Singapore</strong>, a city that redefined creativity for me. It’s here that I honed my craft, graduating with a degree in Graphic Design,
                            and truly discovered the power of thoughtful, intentional design.
                        </p>
                        <p>
                            After years of working with brands and gaining hands-on experience in everything from branding and motion design to sustainability-focused campaigns,
                            I realised I didn’t just want to create—I wanted to empower others to do the same.
                        </p>
                        <p>
                            That’s when <strong>Empcrig</strong> was born.
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center pt-10 md:pt-20">
                    <Image
                        src={image || "/images/profile.png"}
                        alt="Founder"
                        width={600}
                        height={600}
                        className="rounded-full object-cover w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px]"
                        priority
                    />
                </div>
            </section>
        </div>
    );
};

export default Aboutus;
