// src/pages/index.js
import HeroVideoBackground from '../components/HeroVideoBackground';
import DesignVideoBackground from '../components/DesignVideoBackground';
import Aboutus from '../components/Aboutus';
import WhyEmpcrig from '../components/whyempcrig';
import ServicesR from '../components/ServicesR';
import Contactus from '../components/Contactus';
import ScrollNavigator from '../components/ScrollNavigator';
import PortfolioGallery from '../components/PortfolioGallery';

export default function Home() {
  return (
    <>
      <main className="pt-11 overflow-x-auto">


        <HeroVideoBackground />

        <PortfolioGallery
          title="Your Vision, Our Expertise"
          subtitle="Empcrig delivers innovative, sustainable design solutions that empower your brand."
          image="/hero-image.jpg"
        />

        <ServicesR
          title="Your Vision, Our Expertise"
          subtitle="Empcrig delivers innovative, sustainable design solutions that empower your brand."
          image="/hero-image.jpg"
        />

        <DesignVideoBackground
          title="Design process at Empcrig"
          subtitle="From concept to creation, explore the steps that transform your vision into reality."
          image="/hero-image.jpg"
        />
        {/* Aboutus Section*/}
        <Aboutus
          title="Design That Empower."
          subtitle="Stories That Ignite"
          image="/images/profile.png"
        />

        {/* Aboutus Section*/}
        <WhyEmpcrig
          title="Design That Empower."
          subtitle="Stories That Ignite"
          image="/profile.png"
        />

        {/* Contactus Section*/}
        <Contactus
          title="Contact Us"
          subtitle="Let's connect & Create Something Amazing."
          heading="Tell us about your vision, and we'll help bring it to life—boldly, beautifully, and with purpose."
        />

        <ScrollNavigator />
      </main>

    </>
  );
}
