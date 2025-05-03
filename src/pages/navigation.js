// pages/index.js
import MobileNavR from '../components/MobileNavR';
import Logo from '../../public/images/empcrig-logo.png';
export default function About() {
  return (
    <div className="pt-16">
     <MobileNavR
          logoSrc={Logo}
        />
    </div>
  );
}