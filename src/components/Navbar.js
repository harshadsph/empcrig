// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Using Next.js Image for better optimization

import Hamburger from './Hamburger';
import MobileNav from './MobileNav';
import Logo from '../../public/images/empcrig-logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white p-6">
            <div className="flex justify-between items-center pl-20">
                {/* Hamburger menu on the left */}
                <Hamburger isOpen={isOpen} toggle={toggleMenu} />

                {/* Logo in the center */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link href="/" >
                    <Image
                        src={Logo} // replace this with the path to your logo
                        alt="Brand Logo"
                        className="mx-auto max-h-20" // Adjust max height to control size
                        width={100} // Auto-size based on width (adjust as needed)
                        height={100} // This is just to maintain the aspect ratio
                    />
                </Link>
                </div>

                {/* Links on the right */}
                <div className="space-x-4">
                    <Link href="/services" className="hover:text-hexblue text-hexgrey text-xl px-4 py-2 rounded transform hover:scale-105 transition duration-300">
                        Discover Our World
                    </Link>
                    <Link href="/designs" className="hover:text-hexblue text-hexgrey text-xl px-4 py-2 rounded transform hover:scale-105 transition duration-300">
                        Designs
                    </Link>
                    <Link href="/about" className="hover:text-hexblue text-hexgrey text-xl px-4 py-2 rounded transform hover:scale-105 transition duration-300">
                        Let's Colloborate
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <MobileNav isOpen={isOpen} close={toggleMenu} logoSrc={Logo} />
        </nav>
    );
}
