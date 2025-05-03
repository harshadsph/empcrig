import Link from 'next/link';
import Image from 'next/image';

import SocialIcons from './SocialIcons';

const MobileNav = ({ isOpen, close, logoSrc }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-screen w-screen bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="relative"> {/* Add relative positioning */}
                {logoSrc && (
                    <div className="flex justify-center">
                        <button className="absolute top-4 left-4 text-3xl pl-20" onClick={close}>X</button>
                        <Image src={logoSrc} alt="Logo" width={100} height={40} />
                    </div>
                )}
                <div className='relative hero-background bg-transparent bg-cover bg-center h-screen p-20 text-white'>
                    <nav className="flex justify-between items-center">
                        {/* Left Navigation */}
                        <ul className="flex flex-col">
                            <li className='p-5'>
                                <Link href="/designs" className="text-5xl">Work</Link>
                            </li>
                            <li className='p-5'>
                                <Link href="/about" className="text-5xl">About</Link>
                            </li>
                            <li className='p-5'>
                                <Link href="/services" className="text-5xl">Services</Link>
                            </li>
                            <li className='p-5'>
                                <Link href="/services" className="text-5xl">Blog</Link>
                            </li>
                        </ul>

                        {/* Right Navigation */}
                        <ul className="flex flex-col">
                            <li className='p-5'>
                                <Link href="/contact" className="text-5xl">Contact us</Link>
                            </li>
                            <li className='p-5'>
                                <Link href="/login" className="text-5xl">Email Id</Link>
                                <p className='text-2xl py-1'>nehal@empcrig.com</p>
                            </li>
                            <li className='p-5'>
                                <Link href="/signup" className="text-5xl">Get Started</Link>
                            </li>
                            <div className="flex p-5">
                                {/* Social Icons (replace with your actual icons) */}
                               <SocialIcons />
                            </div>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    );
};

export default MobileNav;