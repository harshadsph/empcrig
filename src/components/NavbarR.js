// components/NavbarR.js
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Hamburger from './Hamburger';
import MobileNav from './MobileNav';
import Logo from '../../public/images/empcrig-logo.png';

export default function NavbarR() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="relative flex items-center justify-between max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 h-20">
        
        {/* Hamburger - visible only on mobile */}
        <div>
          <Hamburger isOpen={isOpen} toggle={toggleMenu} />
        </div>

        {/* Logo - always centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src={Logo}
              alt="Brand Logo"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Desktop Links - hidden on mobile */}
        <div className="hidden lg:flex space-x-6 ml-auto">
          <Link href="/services" className="hover:text-hexblue text-hexgrey text-lg px-3 py-2 transition duration-300">
            Discover Our World
          </Link>
          <Link href="/designs" className="hover:text-hexblue text-hexgrey text-lg px-3 py-2 transition duration-300">
            Designs
          </Link>
          <Link href="/about" className="hover:text-hexblue text-hexgrey text-lg px-3 py-2 transition duration-300">
            Let's Collaborate
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {/* <MobileNav isOpen={isOpen} close={toggleMenu} logoSrc={Logo} /> */}
    </nav>
  );
}
