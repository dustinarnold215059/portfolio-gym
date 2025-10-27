import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/memberships', label: 'Memberships' },
    { path: '/classes', label: 'Classes' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom max-w-full overflow-hidden">
        <div className="flex justify-between items-center gap-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1.5 sm:space-x-3 flex-shrink min-w-0">
            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-base sm:text-xl">IC</span>
            </div>
            <div className="min-w-0 flex-shrink">
              <h1 className={`font-heading text-base sm:text-xl md:text-2xl truncate whitespace-nowrap ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                IronCore Fitness
              </h1>
              <p className={`text-xs hidden md:block ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Forge Your Strength
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors relative group ${
                  location.pathname === link.path
                    ? isScrolled
                      ? 'text-primary'
                      : 'text-accent'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white hover:text-accent'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                    location.pathname === link.path ? 'w-full' : ''
                  } ${isScrolled ? 'bg-primary' : 'bg-accent'}`}
                ></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-1 sm:p-2 rounded-lg flex-shrink-0 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            ) : (
              <Bars3Icon className="h-7 w-7 sm:h-8 sm:w-8" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-4 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-semibold transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="btn btn-primary w-full text-center"
                >
                  Join Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
