import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from './SocialIcons';

const MobileNav = ({logoSrc }) => {
  return (
    <div>
      <div className="relative hero-background bg-transparent bg-cover bg-center h-full ">

        {/* Main Nav */}
        <div className="flex flex-col md:flex-row justify-between p-8 md:p-40 gap-12 h-full overflow-y-auto">
          {/* Left Navigation */}
          <ul className="space-y-6">
            <li>
              <Link href="/" className="text-4xl lg:text-8xl text-bold text-hexgrey hover:text-hexblue">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-4xl lg:text-8xl text-hexgrey hover:text-hexblue">About</Link>
            </li>
            <li>
              <Link href="/services" className="text-4xl lg:text-8xl text-hexgrey hover:text-hexblue">Services</Link>
            </li>
            {/* <li>
              <Link href="/blog" className="text-4xl lg:text-8xl text-hexgrey hover:text-hexblue">Blog</Link>
            </li> */}
          </ul>

          {/* Right Navigation */}
          <ul className="space-y-6">
            <li>
              <Link href="/contactus" className="text-4xl text-hexgrey hover:text-hexblue">Contact Us</Link>
            </li>
            <li>
              <div>
                <span className="text-4xl lg:text-8xl text-hexgrey">Email</span>
                <p className="text-xl mt-1 text-hexgrey">nehal@empcrig.com</p>
              </div>
            </li>
            {/* <li>
              <Link href="/signup" className="text-4xl text-hexgrey hover:text-hexblue">Get Started</Link>
            </li> */}
            <li>
              <div className="pt-2">
                <SocialIcons />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
