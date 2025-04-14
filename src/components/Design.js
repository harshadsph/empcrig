// src/components/Services.js

const Design = ({ title, subtitle, image }) => {

    return (

        <div className="design-background bg-transparent w-full h-screen">
            {/* // Design text Section */}
            <div className="p-10 text-white">
                <div className="text-center p-4"><h1 className="text-8xl font-bold">{title} </h1></div>
                <div className="text-center p-2"><h2 className="text-2xl">"{subtitle}"</h2></div>
            </div>

            {/* // Design Video Section */}
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
                        <source src="/videos/designprocess.mp4" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Design;
