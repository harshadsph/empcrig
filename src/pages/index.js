// src/pages/index.js
import Hero from '../components/Hero';
import HeroVideoBackground from '../components/HeroVideoBackground';
import Services from '../components/Services';
import Design from '../components/Design';
import DesignVideoBackground from '../components/DesignVideoBackground';
import Aboutus from '../components/Aboutus';
import WhyEmpcrig from '../components/whyempcrig';
import ServicesR from '../components/ServicesR';

export default function Home() {
  return (
    <>
      <main className="pt-11 overflow-x-auto">
        {/* Hero Section*/}
        {/* <Hero
          title="Empower Your Brand With Impactful & Sustainable Designs"
          subtitle="Where creativity meets strategy, and sustainability drives innovation."
          image="/hero-image.jpg"
        /> */}

        <HeroVideoBackground />

        {/* Services Section*/}
        {/* <Services
          title="Our Expertise, Your Vision"
          subtitle="Empcrig delivers innovative, sustainable design solutions that empower your brand."
          image="/hero-image.jpg"
        /> */}

        <ServicesR
          title="Our Expertise, Your Vision"
          subtitle="Empcrig delivers innovative, sustainable design solutions that empower your brand."
          image="/hero-image.jpg"
        />

        

        {/* Design Section*/}
        {/* <Design
          title="Design process at Empcrig"
          subtitle="From concept to creation, explore the steps that transform your vision into reality."
          image="/hero-image.jpg"
        /> */}

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
      </main>

    </>
  );
}
