// src/components/whyempcrig.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
//  Created a simple cn function within the component.
const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const WhyEmpcrig = ({ title, subtitle, image }) => {

    const [hoveredContent, setHoveredContent] = useState('');

    const pillarContents = {
        Empower: 'Helping brands and individuals find their voice through design.',
        Create: 'Turning visuals into visuals that connect deeply.',
        Ignite: 'Sparking change with designs that make a difference—both creatively and consciously.',
    };

    return (

        <div className="design-background bg-transparent w-full h-screen">
            <div className="text-white flex flex-col items-center justify-center p-4 md:p-8">
                <div className="max-w-8xl w-full space-y-12">
                    {/* Why Empcrig? */}
                    <div className="text-center space-y-2 pb-20">
                        <h1 className="text-8xl sm:text-5xl md:text-8xl font-bold bg-clip-text text-hexgrey pb-5">
                            Why Empcrig?
                        </h1>
                        <p className="text-hexgrey text-3xl">
                            Empcrig stands for 3 pillars:
                        </p>
                    </div>

                    {/* Three Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Empower */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={cn(
                                "rounded-xl shadow-lg",
                                "border border-white/10",
                                "hover:shadow-purple-500/20 hover:scale-[1.02]",
                                "transition-all duration-300",
                                "flex items-center justify-center", // Added to center content
                                "relative group" // Added relative for absolute positioning of the tooltip
                            )}
                            style={{ backgroundColor: 'rgba(202, 86, 161, 0.2)' }} // Apply the background color directly with 20% opacity
                            onMouseEnter={() => setHoveredContent(pillarContents.Empower)}
                            onMouseLeave={() => setHoveredContent('')}
                        >

                            <h2 className="text-5xl font-semibold text-hexgrey text-center">Empower</h2>
                            <motion.div
                                className="absolute bottom-full mb-2 text-hexgrey text-2xl p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-center font-sans"
                                style={{ pointerEvents: 'none', backgroundColor: 'rgba(202, 86, 161, 0.2)' }} // Important: Makes the tooltip not interfere with hover
                            >
                                {hoveredContent === pillarContents.Empower && pillarContents.Empower}
                            </motion.div>
                        </motion.div>

                        {/* Create */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={cn(
                                "p-6 rounded-xl shadow-lg",
                                "bg-white/5 backdrop-blur-md border border-white/10",
                                "hover:shadow-green-500/20 hover:scale-[1.02]",
                                "transition-all duration-300",
                                "flex items-center justify-center", // Added to center content
                                "relative group" // Added relative for absolute positioning of the tooltip
                            )}
                            style={{ backgroundColor: 'rgba(139, 197, 67, 0.2)' }} // Apply the background color directly with 20% opacity
                            onMouseEnter={() => setHoveredContent(pillarContents.Create)}
                            onMouseLeave={() => setHoveredContent('')}
                        >
                            <h2 className="text-5xl font-semibold text-hexgrey text-center">Create</h2>
                            <motion.div
                                className="absolute bottom-full mb-2 text-hexgrey text-2xl p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-center font-sans"
                                style={{ pointerEvents: 'none', backgroundColor: 'rgba(139, 197, 67, 0.2)' }} // Important: Makes the tooltip not interfere with hover
                            >
                                {hoveredContent === pillarContents.Create && pillarContents.Create}
                            </motion.div>
                        </motion.div>

                        {/* Ignite */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className={cn(
                                "p-6 rounded-xl shadow-lg",
                                "bg-white/5 backdrop-blur-md border border-white/10",
                                "hover:shadow-yellow-500/20 hover:scale-[1.02]",
                                "transition-all duration-300",
                                "flex items-center justify-center", // Added to center content
                                "relative group" // Added relative for absolute positioning of the tooltip
                            )}
                            style={{ backgroundColor: 'rgba(248, 183, 121, 0.2)' }} // Apply the background color directly with 20% opacity
                            onMouseEnter={() => setHoveredContent(pillarContents.Ignite)}
                            onMouseLeave={() => setHoveredContent('')}
                        >
                            <h2 className="text-5xl font-semibold text-hexgrey text-center">Ignite</h2>
                            <motion.div
                                className="absolute bottom-full mb-2 text-hexgrey text-2xl p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity text-center font-sans"
                                style={{ pointerEvents: 'none', backgroundColor: 'rgba(248, 183, 121, 0.2)' }} // Important: Makes the tooltip not interfere with hover
                            >
                                {hoveredContent === pillarContents.Ignite && pillarContents.Ignite}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Our Movement */}
                    <div className="">
                        <h1 className="text-hexgrey text-center text-2xl">
                            With Empcrig, I&apos;m not just building a studio—I&apos;m building a movement for meaningful design. One that&apos;s creative, sustainable,
                            and unapologetically bold.
                        </h1>
                    </div>

                    {/* What Makes Us Different? */}
                    <div className="text-hexgrey text-center">
                        <h2 className="text-5xl sm:text-4xl font-semibold text-center pb-10">What Makes Us Different?</h2>
                        <p className="text-hexgrey px-4 pb-10 max-w-3xl mx-auto text-center ">At Empcrig, we don’t just design—we spark joy, stir curiosity, and make brands unforgettable. Our secret sauce? A splash of bold ideas, a pinch of eco-conscious magic, and a lot of heart. We bring imagination to life, and your story is our favorite canvas. </p>
                        <blockquote className="text-2xl">
                            &ldquo;Design isn&apos;t just how it looks. It&apos;s how it connects. <br />And at Empcrig, we design with intention.&rdquo;
                        </blockquote>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyEmpcrig;
