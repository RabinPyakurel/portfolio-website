import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between py-3 sm:py-4">
        <Link to="/" className="text-xl font-bold font-mono text-primary-400 hover:text-primary-300 transition-colors">
          &lt;RP /&gt;
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-primary-400 border-b-2 border-primary-400 pb-1'
                    : 'text-gray-400 hover:text-primary-400'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <SocialLinks size="text-lg" />
        </div>

        <div className="flex md:hidden items-center">
          <button
            className="text-2xl text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1117] border-b border-gray-800 px-6 pb-4">
          {NAV_ITEMS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm font-medium ${
                  isActive ? 'text-primary-400' : 'text-gray-400'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2">
            <SocialLinks size="text-lg" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
