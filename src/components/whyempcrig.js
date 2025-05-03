// src/components/WhyEmpcrig.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const WhyEmpcrig = () => {
    const [hoveredContent, setHoveredContent] = useState('');

    const pillarContents = {
        Empower: 'Helping brands and individuals find their voice through design.',
        Create: 'Turning visuals into visuals that connect deeply.',
        Ignite: 'Sparking change with designs that make a difference—both creatively and consciously.',
    };

    const pillars = [
        {
            name: 'Empower',
            color: 'rgba(202, 86, 161, 0.2)',
            delay: 0,
        },
        {
            name: 'Create',
            color: 'rgba(139, 197, 67, 0.2)',
            delay: 0.2,
        },
        {
            name: 'Ignite',
            color: 'rgba(248, 183, 121, 0.2)',
            delay: 0.4,
        },
    ];

    return (
        <div className="design-background bg-transparent w-full py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto text-hexgrey space-y-20 text-center">
                {/* Title */}
                <div>
                    <h1 className="text-5xl sm:text-6xl font-bold mb-4">Why Empcrig?</h1>
                    <p className="text-2xl sm:text-3xl">Empcrig stands on 3 pillars:</p>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map(({ name, color, delay }) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay }}
                            onMouseEnter={() => setHoveredContent(pillarContents[name])}
                            onMouseLeave={() => setHoveredContent('')}
                            className={cn(
                                "rounded-xl border border-white/10 transition-all duration-300",
                                "hover:scale-[1.02] hover:shadow-xl",
                                "relative group p-10 flex items-center justify-center"
                            )}
                            style={{ backgroundColor: color }}
                        >
                            <h2 className="text-4xl font-semibold">{name}</h2>
                            <motion.div
                                className="absolute bottom-full mb-3 text-xl px-4 py-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity text-center"
                                style={{ backgroundColor: color, pointerEvents: 'none' }}
                            >
                                {hoveredContent === pillarContents[name] && pillarContents[name]}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Movement Message */}
                <div>
                    <h2 className="text-2xl max-w-3xl mx-auto">
                        With Empcrig, I&apos;m not just building a studio—I&apos;m building a movement for meaningful design.
                        One that&apos;s creative, sustainable, and unapologetically bold.
                    </h2>
                </div>

                {/* What Makes Us Different */}
                <div className="space-y-8">
                    <h3 className="text-4xl sm:text-5xl font-semibold">What Makes Us Different?</h3>
                    <p className="max-w-3xl mx-auto text-xl">
                        At Empcrig, we don’t just design—we spark joy, stir curiosity, and make brands unforgettable.
                        Our secret sauce? A splash of bold ideas, a pinch of eco-conscious magic, and a lot of heart.
                        We bring imagination to life, and your story is our favorite canvas.
                    </p>
                    <blockquote className="text-2xl italic text-hexgrey">
                        &ldquo;Design isn&apos;t just how it looks. It&apos;s how it connects.
                        <br />And at Empcrig, we design with intention.&rdquo;
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default WhyEmpcrig;
