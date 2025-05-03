// pages/index.js
import DesignVideoBackground from '../components/DesignVideoBackground';
export default function About() {
  return (
    <div className="pt-16">
     <DesignVideoBackground
          title="Design process at Empcrig"
          subtitle="From concept to creation, explore the steps that transform your vision into reality."
          image="/hero-image.jpg"
        />
    </div>
  );
}