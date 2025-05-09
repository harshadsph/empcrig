import { FaInstagram, FaLinkedinIn, FaEnvelope, FaFacebook } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold mb-3 text-hexgrey">Let’s Connect</h3>
      <div className="flex space-x-6 mt-4">
        <a href="https://www.facebook.com/profile.php?id=100078057437475" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl text-blue-500 hover:text-hexblue transition-colors duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-pink-500 hover:text-hexblue transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-3xl text-blue-600 hover:text-hexblue transition-colors duration-300" />
        </a>
        <a href="mailto:hello@empcrig.com">
          <FaEnvelope className="text-3xl text-yellow-500 hover:text-hexblue transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;