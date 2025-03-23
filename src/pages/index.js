// src/pages/index.js
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Hero 
        title="Welcome to Our Website" 
        subtitle="We are here to serve you" 
        image="/hero-image.jpg" 
      />
      {/* Other sections of the page */}
    </>
  );
}
