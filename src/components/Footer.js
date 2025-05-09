// src/components/Footer.js
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import Logo from '../../public/images/empcrig-logo.png';
import Image from 'next/image';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">

        {/* Logo + Tagline */}
        <div className="space-y-4">
        <Link href="/">
            <Image
              src={Logo}
              alt="Brand Logo"
              width={100}
              height={100}
              priority
            />
          </Link>
          <p className="text-sm text-hexgrey">Empower. Create. Ignite.</p>
          <p className="text-sm text-hexgrey max-w-xs">
            A movement for bold, sustainable, and meaningful design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-hexgrey text-sm">
            <li><Link href="/about" className="hover:text-hexblue">About</Link></li>
            {/* <li><Link href="/Portfolio" className="hover:text-hexblue">Portfolio</Link></li> */}
            <li><Link href="/services" className="hover:text-hexblue">Services</Link></li>
            <li><Link href="/contactus" className="hover:text-hexblue">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <SocialIcons />
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-hexgrey">
        &copy; {new Date().getFullYear()} Empcrig. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
