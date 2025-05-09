// pages/index.js
import Portfolio from '../components/Portfolio';
export default function Designs() {
  return (
    <div className="pt-16">
      <Portfolio
          title="Design process at Empcrig"
          subtitle="From concept to creation, explore the steps that transform your vision into reality."
          image="/hero-image.jpg"
        />
    </div>
  );
}