import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/rabin-pyakurel-a38438260/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/RabinPyakurel', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.instagram.com/the.rabin_', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://x.com/Pyakurel2Rabin', icon: FaSquareXTwitter, label: 'X/Twitter' },
];

const SocialLinks = ({ size = 'text-2xl' }) => (
  <div className={`flex items-center gap-4 ${size}`}>
    {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-gray-500 hover:text-primary-400 transition-colors duration-200"
      >
        <Icon />
      </a>
    ))}
  </div>
);

export default SocialLinks;
