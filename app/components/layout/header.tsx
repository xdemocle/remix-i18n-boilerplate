import { Link, useLocation } from '@remix-run/react';
import { CtaButton } from '~/components/ui/cta-button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './language-switcher';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation('common');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.features'), path: '/features' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.faq'), path: '/faq' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="mr-2 text-primary-500">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.5 10C19.5 10.5 19.5 12 17 12C17 12 19.5 12 19.5 14C19.5 14 19.5 12.5 22 12.5C22 12.5 19.5 12.5 19.5 10Z" />
              <path d="M12.5 10C12.5 10.5 12.5 12 10 12C10 12 12.5 12 12.5 14C12.5 14 12.5 12.5 15 12.5C15 12.5 12.5 12.5 12.5 10Z" />
              <path d="M15.5 4C15.5 4.5 15.5 6 13 6C13 6 15.5 6 15.5 8C15.5 8 15.5 6.5 18 6.5C18 6.5 15.5 6.5 15.5 4Z" />
              <path d="M15.5 17C15.5 17.5 15.5 19 13 19C13 19 15.5 19 15.5 21C15.5 21 15.5 19.5 18 19.5C18 19.5 15.5 19.5 15.5 17Z" />
              <path d="M8.5 19C8.5 19.5 8.5 21 6 21C6 21 8.5 21 8.5 23C8.5 23 8.5 21.5 11 21.5C11 21.5 8.5 21.5 8.5 19Z" />
              <path d="M8 2.5C8 3 8 4.5 5.5 4.5C5.5 4.5 8 4.5 8 6.5C8 6.5 8 5 10.5 5C10.5 5 8 5 8 2.5Z" />
              <path d="M4 7C4 7.5 4 9 1.5 9C1.5 9 4 9 4 11C4 11 4 9.5 6.5 9.5C6.5 9.5 4 9.5 4 7Z" />
              <path d="M4 15C4 15.5 4 17 1.5 17C1.5 17 4 17 4 19C4 19 4 17.5 6.5 17.5C6.5 17.5 4 17.5 4 15Z" />
            </svg>
          </div>
          <span className="text-2xl font-display font-bold">
            <span className="text-primary-500">remix-i18n</span>
            <span className={isScrolled ? 'text-neutral-900' : 'text-white'}>-boilerplate</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActivePath(link.path)
                      ? 'text-primary-500'
                      : isScrolled
                      ? 'text-neutral-700 hover:text-primary-500'
                      : 'text-white hover:text-primary-200'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher isScrolled={isScrolled} />
          <CtaButton variant="cta" size="default" rounded="full" to="/login">
            {t('nav.loginButton')}
          </CtaButton>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageSwitcher isScrolled={isScrolled} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`ml-4 focus:outline-none ${isScrolled ? 'text-neutral-800' : 'text-white'}`}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-2 font-medium ${
                      isActivePath(link.path)
                        ? 'text-primary-500'
                        : 'text-neutral-700 hover:text-primary-500'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/login"
                  className="block py-2 font-medium text-primary-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.loginButton')}
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
}
