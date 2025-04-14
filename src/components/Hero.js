// src/components/Hero.js

const Hero = ({ title, subtitle, image }) => {

    return (

        <div className="hero-background bg-transparent w-full h-screen">
            {/* // Hero text Section */}
            <div className="p-10 text-white">
                <div className="text-center p-4"><h1 className="text-6xl font-bold">{title} </h1></div>
                <div className="text-center p-2"><h2 className="text-2xl">"{subtitle}"</h2></div>
            </div>

            {/* // Hero Video Section */}
            <div className="flex items-center justify-center h-[50vh] p-5 ">
                <div className="w-full max-w-7xl h-full overflow-hidden rounded-xl">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                    >
                        <source src="/videos/2.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* // lets colloborte Section */}

            <div className="p-5 text-white items-center text-center">
                <button className="hover:text-hexgrey text-white px-4 py-2 rounded transform hover:scale-105 transition duration-300">
                    <h1 className="text-4xl font-bold">Let's Work Together</h1>
                </button>
            </div>

        </div>
    );
};

export default Hero;
