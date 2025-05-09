// pages/index.js
import Aboutus from '../components/Aboutus';
export default function About() {
  return (
    <div className="pt-16">
     <Aboutus
          title="Design That Empower."
          subtitle="Stories That Ignite"
          image="/images/profile.png"
        />
    </div>
  );
}