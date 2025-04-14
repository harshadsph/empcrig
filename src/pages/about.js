// pages/index.js
import Aboutus from "../components/Aboutus"
export default function About() {
  return (
    <div className="pt-16">
      <Aboutus
        title="Empowering Brands with Creativity and Sustainability"
        subtitle="Empcrig combines passion for design with a commitment to eco-friendly solutions, transforming ideas into impactful visuals."
        image="/hero-image.jpg"
      />
    </div>
  );
}