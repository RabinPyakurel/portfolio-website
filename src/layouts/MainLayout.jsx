import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CODE_SNIPPETS = [
  'const app = express();',
  'import React from "react"',
  '<div className="hero">',
  'System.out.println()',
  'SELECT * FROM users',
  'git commit -m "feat"',
  'npm run build',
  '@RestController',
  'public static void main()',
  'useState(false)',
  'fetch("/api/data")',
  'CREATE TABLE events',
];

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-gray-100 antialiased">
      {/* Floating code background — site-wide */}
      <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
        {CODE_SNIPPETS.map((snippet, i) => (
          <span
            key={i}
            className="code-float absolute font-mono text-xs sm:text-sm text-gray-600"
            style={{
              left: `${5 + (i * 8.5) % 88}%`,
              top: `${3 + (i * 8.3) % 90}%`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${8 + (i % 5)}s`,
            }}
          >
            {snippet}
          </span>
        ))}
        <div className="ripple-circle absolute top-[15%] left-[10%] w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-primary-900/30" style={{ animation: 'ripple-dark 7s ease-in-out infinite' }} />
        <div className="ripple-circle absolute top-[55%] right-[8%] w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-primary-800/20" style={{ animation: 'ripple-dark 9s ease-in-out infinite 2s' }} />
        <div className="ripple-circle absolute bottom-[10%] left-[35%] w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-primary-900/30" style={{ animation: 'ripple-dark 8s ease-in-out infinite 4s' }} />
      </div>

      <Navbar />
      <main className="relative z-10 flex-grow container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
