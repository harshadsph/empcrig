// src/components/ServicesR.js
'use client';
import ServicesData from "../../data/servicesData";
import { motion } from 'framer-motion';

const ServicesR = ({ title, subtitle, image }) => {

    return (

        <section className="px-4 py-12 services-background bg-transparent w-full">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-7xl font-bold mb-4 text-hexgrey">{title}</h2>
                <p className="text-lg md:text-xl mb-12 font-medium text-hexgrey">"{subtitle}"</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ServicesData.map((serviceData, index) => (
                        <motion.div
                            key={serviceData.index}
                            className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-3xl mb-4">{serviceData.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-hexgrey">{serviceData.title}</h3>
                            <p className="text-sm text-hexgrey">{serviceData.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default ServicesR;
