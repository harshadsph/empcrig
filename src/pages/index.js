// src/pages/index.js
import Hero from '../components/Hero';
import Services from '../components/Services';
import Design from '../components/Design';
import Aboutus from '../components/Aboutus';

export default function Home() {
  return (
    <>
      <main className="pt-16">
        {/* Hero Section*/}
        <Hero
          title="Empower Your Brand With Impactful & Sustainable Designs"
          subtitle="Where creativity meets strategy, and sustainability drives innovation."
          image="/hero-image.jpg"
        />

        {/* Services Section*/}
        <Services
          title="Our Expertise, Your Vision"
          subtitle="Empcrig delivers innovative, sustainable design solutions that empower your brand."
          image="/hero-image.jpg"
        />

        {/* Design Section*/}
        <Design
          title="Design process at Empcrig"
          subtitle="From concept to creation, explore the steps that transform your vision into reality."
          image="/hero-image.jpg"
        />

        {/* Aboutus Section*/}
        <Aboutus
          title="Empowering Brands with Creativity and Sustainability"
          subtitle="Empcrig combines passion for design with a commitment to eco-friendly solutions, transforming ideas into impactful visuals."
          image="/hero-image.jpg"
        />
      </main>

    </>
  );
}
