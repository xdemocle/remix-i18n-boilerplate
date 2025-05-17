import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import NewsletterForm from '../forms/newsletter-form';

export default function Footer() {
  const { t } = useTranslation('common');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
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
                <span className="text-primary-500">bzz</span>
                <span className="text-white">.one</span>
              </span>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-md">{t('footer.description')}</p>

            <div className="mb-8">
              <h4 className="text-white font-bold mb-4">{t('footer.newsletterTitle')}</h4>
              <NewsletterForm />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {t('nav.faq')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.connect')}</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://twitter.com/bzz_one"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary-500 hover:text-white transition-colors duration-200"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/bzzoneapp"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary-500 hover:text-white transition-colors duration-200"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/remix-i18n-boilerplate"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary-500 hover:text-white transition-colors duration-200"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/bzz-one"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-primary-500 hover:text-white transition-colors duration-200"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <h4 className="text-white font-bold mb-4">{t('footer.contactUs')}</h4>
            <div className="space-y-2">
              <a
                href="mailto:hello@remix-i18n-boilerplate"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                hello@remix-i18n-boilerplate
              </a>
              <a
                href="https://wa.me/15551234567"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} remix-i18n-boilerplate. {t('footer.allRightsReserved')}
            </p>
            <div className="flex space-x-4 text-sm text-neutral-500">
              <Link to="/terms" className="hover:text-primary-400 transition-colors duration-200">
                {t('footer.terms')}
              </Link>
              <Link to="/privacy" className="hover:text-primary-400 transition-colors duration-200">
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
