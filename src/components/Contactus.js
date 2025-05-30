// src/components/Services.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const ContactPage = ({ title, subtitle, heading }) => {
    const [responseMessage, setResponseMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const company = event.target.elements.company.value;
        const message = event.target.elements.message.value;

        try {
            const res = await fetch('https://o3dt2ke82f.execute-api.ap-southeast-1.amazonaws.com/Prod/ContactFormHandler', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, company, message })
            });

            if (!res.ok) throw new Error('Network response was not ok');

            const data = await res.json();

            if (data.success) {
                setResponseMessage('✅ Message sent successfully!');
                setIsSuccess(true);
                event.target.reset();
            } else {
                setResponseMessage('❌ Failed to send message.');
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setResponseMessage('❌ Failed to send message.');
            setIsSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contactus-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-8">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-4xl sm:text-5xl md:text-7xl font-bold font-extrabold text-hexgrey"
                    >
                        {title}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-2 text-center text-2xl sm:text-3xl md:text-4xl text-hexgrey"
                    >
                        {subtitle}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-2 text-center text-hexgrey"
                    >
                        {heading}
                    </motion.p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-8 space-y-6 border border-white/10">
                    <motion.form
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    className="w-full px-4 py-2 bg-black/20 text-hexgrey border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="w-full px-4 py-2 bg-black/20 text-hexgrey border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    name="company"
                                    className="w-full px-4 py-2 bg-black/20 text-hexgrey border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    className="w-full px-4 py-2 bg-black/20 text-hexgrey border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                                    required
                                />
                                
                                {/* Submit Button or Loading Indicator */}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-60"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="animate-pulse">Sending<span className="dots">...</span></span>
                                    ) : (
                                        "Let’s Connect"
                                    )}
                                </button>

                                {/* Response Message */}
                                {responseMessage && (
                                    <p className={`mt-4 text-center text-sm font-medium ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                                        {responseMessage}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-semibold mb-3 text-hexgrey">Email Id</h3>
                                <p className="text-hexgrey sm:text-lg">nehal@empcrig.com</p>
                            </div>
                            <div className="py-10"> <SocialIcons /></div>
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
