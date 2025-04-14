import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://www.facebook.com/yourpage" className="hover:text-blue-600">
        <FontAwesomeIcon icon={faFacebook} size="3x" style={{ color: '#1877F2' }} />
      </a>
      <a href="https://twitter.com/yourhandle" className="hover:text-blue-400">
        <FontAwesomeIcon icon={faTwitter} size="3x" style={{ color: '#1DA1F2' }}/>
      </a>
      <a href="https://www.instagram.com/yourhandle" className="hover:text-pink-600">
        <FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: '#E4405F' }} />
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" className="hover:text-blue-800">
        <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ color: '#0A66C2' }} />
      </a>
    </div>
  );
};

export default SocialIcons;