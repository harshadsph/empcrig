import { useState } from "react";

import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";

const projects = [
    {
      title: "Branding",
      image: "/images/branding.png",
    },
    {
      title: "Illustration",
      image: "/images/illustration.png",
    },
    {
      title: "Animation & Motion Design",
      image: "/images/animation.png",
    },
    {
      title: "UX/UI Design",
      image: "/images/uiux.png",
    },
    {
      title: "Print Design",
      image: "/images/print.jpg",
    },
    {
      title: "Video Editing",
      image: "/images/video.jpg",
    },
  ];

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="md:px-20 portfolio-background px-6 py-14 text-hexgrey">
      <div className="max-w-8xl mx-auto">
        {/* Header & Video Block */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 mb-12">
          {/* Video tag with sample video */}
          <div className="w-full lg:w-1/2 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
              >
                <source src="/videos/portfolio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Header Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <h2 className="text-4xl md:text-6xl font-bold">
              From Concept to Creation <br className="hidden md:block" />
              - Our Visual Journey
            </h2>
            <p className="mt-8 text-1xl md:text-2xl text-hexgrey text-center lg:text-right">
              Experience the thinking, craft, and flair behind every Empcrig masterpiece.
            </p>
          </div>
        </div>

         {/* Animated Projects Grid with BG images */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
         <motion.div
         key={index}
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         viewport={{ once: true }}
         className="h-48 rounded-xl bg-center bg-cover bg-no-repeat relative overflow-hidden shadow-md group backdrop-blur-md rounded-xl p-6 shadow-lg"
         style={{ backgroundImage: `url(${project.image})` }}
       >
         {/* Fallback overlay with standard opacity classes */}
         <div className="absolute inset-0 bg-hexgrey bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
       
         {/* Centered text with semi-transparent background */}
         <div className="absolute inset-0 flex items-center justify-center">
           <h3 className="text-white text-2xl sm:text-3xl font-bold px-6 py-2 bg-black bg-opacity-60 rounded-md text-center">
             {project.title}
           </h3>
         </div>
       </motion.div>
         
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg sm:text-xl font-medium">
            Inspired? Let’s Bring Your Vision to Life
          </p>
          <button className="mt-4 text-lg sm:text-xl font-bold underline">
          <SocialIcons />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
