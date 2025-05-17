import { MetaFunction } from '@remix-run/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LoaderFunctionArgs } from 'react-router';
import { BackgroundSlider } from '~/components/ui/background-slider';
import { CtaButton } from '~/components/ui/cta-button';
import remixI18Next from '~/i18n/i18next.server';
import { MainLayout } from '../components/layout/main-layout';
import { AnimatedSection } from '../components/ui/animated-section';
import { FeatureCard } from '../components/ui/feature-card';

export const meta: MetaFunction = () => {
  return [
    { title: 'remix-i18n-boilerplate - Launch your online store in 2 clicks' },
    {
      name: 'description',
      content:
        'Help local vendors, small businesses, and street shop owners launch their online presence in just 2 clicks!',
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = remixI18Next.getLocale(request);

  return {
    locale,
  };
}

export default function Index() {
  const { t } = useTranslation('home');

  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      title: t('features.customerReach.title'),
      description: t('features.customerReach.description'),
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: t('features.onlineSales.title'),
      description: t('features.onlineSales.description'),
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: t('features.deviceFriendly.title'),
      description: t('features.deviceFriendly.description'),
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-[30vh] relative relative justify-center align-center h-[80vh] pb-60 md:pt-40 md:pb-60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 z-0">
          <BackgroundSlider
            images={[
              '/assets/images/daiga-ellaby-YnNczu62rdk-unsplash.jpg',
              '/assets/images/jason-leung-v9NklNa26GU-unsplash.jpg',
              '/assets/images/marek-piwnicki-3f22ob_rtnA-unsplash.jpg',
              '/assets/images/wietse-jongsma-K_GLVR6O1ME-unsplash.jpg',
              '/assets/images/zetong-li-aCusqffy5sY-unsplash.jpg',
            ]}
            interval={6000}
            className="z-0"
          />
        </div>

        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 container mx-auto px-4 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-white text-4xl md:text-5xl font-bold mb-6 text-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t('hero.title')}
              </motion.h1>

              <motion.p
                className="text-primary-50 text-lg md:text-xl mb-8 text-white text-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CtaButton variant="cta" size="lg" rounded="full" to="/signup">
                  {t('hero.primaryCta')}
                </CtaButton>
                <CtaButton variant="outline" size="lg" rounded="full" to="/features">
                  {t('hero.secondaryCta')}
                </CtaButton>
              </motion.div>
            </div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="bg-white rounded-lg shadow-2xl p-2 transform rotate-2">
                  <img
                    src="https://images.pexels.com/photos/4473398/pexels-photo-4473398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Local shop owner happy with online store"
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white rounded-lg shadow-xl p-2 transform -rotate-3 w-2/3">
                  <img
                    src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Customer shopping on mobile"
                    className="rounded-lg object-cover w-full h-40"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-full shadow-lg p-4 w-20 h-20 flex items-center justify-center">
                  <div className="text-primary-500">
                    <svg
                      width="40"
                      height="40"
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('featuresSection.title')}</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              {t('featuresSection.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('testimonialsSection.title')}
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              {t('testimonialsSection.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                className="bg-white rounded-xl p-6 shadow-custom"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary-500">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-primary-500 ml-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-primary-500 ml-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-primary-500 ml-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-primary-500 ml-1">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="mb-4 text-neutral-700">
                  {t(`testimonialsSection.testimonials.${index}.quote`)}
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden mr-4">
                    <img
                      src={`https://images.pexels.com/photos/${
                        [1587009, 614810, 762020][index]
                      }/pexels-photo-${
                        [1587009, 614810, 762020][index]
                      }.jpeg?auto=compress&cs=tinysrgb&w=120`}
                      alt={t(`testimonialsSection.testimonials.${index}.name`)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">
                      {t(`testimonialsSection.testimonials.${index}.name`)}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {t(`testimonialsSection.testimonials.${index}.business`)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
                {t('ctaSection.title')}
              </h2>
              <p className="text-primary-900 mb-8 text-lg">{t('ctaSection.subtitle')}</p>
              <CtaButton variant="cta" size="lg" rounded="full" to="/signup">
                {t('ctaSection.cta')}
              </CtaButton>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
