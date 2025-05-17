import { Link, useLocation } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CtaButton } from '~/components/ui/cta-button';
import LogoRemix from '../logo-remix';
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
            <LogoRemix />
          </div>
          <span className="text-2xl font-display font-bold truncate">
            <span className={isScrolled ? 'text-neutral-900' : 'text-shadow-xs text-white'}>
              i18n-boiler
            </span>
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
                      : 'text-white hover:text-primary-200 text-shadow-xs'
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
