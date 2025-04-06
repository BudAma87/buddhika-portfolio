import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/experience' },
    { label: 'Contact', to: '/contact' },
  ];

  const activeClass = 'text-blue-600 dark:text-blue-400 underline';

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <img
            src="/images/White_BG_Buddhika.png"
            alt="Buddhika Amarasinghe"
            className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-white/20"
          />
          <h1 className="text-lg font-bold text-gray-800 dark:text-white whitespace-nowrap">
            Buddhika Amarasinghe
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium px-2 py-1 rounded transition ${
                location.pathname === link.to
                  ? activeClass
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 dark:text-white focus:outline-none"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium py-1 ${
                location.pathname === link.to
                  ? activeClass
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setDark(!dark);
              setMenuOpen(false);
            }}
            className="w-full text-left px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  );
}
