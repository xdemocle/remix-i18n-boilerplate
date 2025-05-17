import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';
import { useTranslation } from 'react-i18next';
import { MainLayout } from '~/components/layout/main-layout';
import { AnimatedSection } from '~/components/ui/animated-section';
import { FAQAccordion } from '~/components/ui/faq-accordion';
import remixI18Next from '~/i18n/i18next.server';

export const meta: MetaFunction = () => {
  return [
    { title: 'FAQ - remix-i18n-boilerplate' },
    {
      name: 'description',
      content:
        'Frequently asked questions about remix-i18n-boilerplate - Get answers to common questions about our online store platform for small businesses.',
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const locale = remixI18Next.getLocale(request);

  return {
    locale,
  };
}

export default function FAQ() {
  const { t } = useTranslation('faq');

  const faqCategories = [
    {
      title: t('categories.general.title'),
      faqs: [
        {
          question: t('categories.general.questions.1.question'),
          answer: t('categories.general.questions.1.answer'),
        },
        {
          question: t('categories.general.questions.2.question'),
          answer: t('categories.general.questions.2.answer'),
        },
        {
          question: t('categories.general.questions.3.question'),
          answer: t('categories.general.questions.3.answer'),
        },
        {
          question: t('categories.general.questions.4.question'),
          answer: t('categories.general.questions.4.answer'),
        },
      ],
    },
    {
      title: t('categories.technical.title'),
      faqs: [
        {
          question: t('categories.technical.questions.1.question'),
          answer: t('categories.technical.questions.1.answer'),
        },
        {
          question: t('categories.technical.questions.2.question'),
          answer: t('categories.technical.questions.2.answer'),
        },
        {
          question: t('categories.technical.questions.3.question'),
          answer: t('categories.technical.questions.3.answer'),
        },
        {
          question: t('categories.technical.questions.4.question'),
          answer: t('categories.technical.questions.4.answer'),
        },
      ],
    },
    {
      title: t('categories.billing.title'),
      faqs: [
        {
          question: t('categories.billing.questions.1.question'),
          answer: t('categories.billing.questions.1.answer'),
        },
        {
          question: t('categories.billing.questions.2.question'),
          answer: t('categories.billing.questions.2.answer'),
        },
        {
          question: t('categories.billing.questions.3.question'),
          answer: t('categories.billing.questions.3.answer'),
        },
        {
          question: t('categories.billing.questions.4.question'),
          answer: t('categories.billing.questions.4.answer'),
        },
      ],
    },
    {
      title: t('categories.support.title'),
      faqs: [
        {
          question: t('categories.support.questions.1.question'),
          answer: t('categories.support.questions.1.answer'),
        },
        {
          question: t('categories.support.questions.2.question'),
          answer: t('categories.support.questions.2.answer'),
        },
        {
          question: t('categories.support.questions.3.question'),
          answer: t('categories.support.questions.3.answer'),
        },
        {
          question: t('categories.support.questions.4.question'),
          answer: t('categories.support.questions.4.answer'),
        },
      ],
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-primary-50 text-xl mb-8">{t('hero.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder={t('search.placeholder')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <AnimatedSection key={index} className="mb-16 last:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">{category.title}</h2>
                <FAQAccordion faqs={category.faqs} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
              <p className="text-neutral-600 mb-8 text-lg">{t('cta.subtitle')}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="btn-primary">
                  {t('cta.contactButton')}
                </a>
                <a href="/signup" className="btn-outline">
                  {t('cta.startButton')}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
