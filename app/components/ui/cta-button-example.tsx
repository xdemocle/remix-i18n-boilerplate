import { useTranslation } from 'react-i18next';
import { CtaButton } from './cta-button';

/**
 * Example component showing how to use the CtaButton with translations
 * 
 * This is just a demonstration - you would integrate these buttons
 * into your actual page components as needed.
 */
export function CtaButtonExample() {
  const { t } = useTranslation('common');
  
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-8">
      {/* Primary CTA - Get Started */}
      <CtaButton 
        variant="cta" 
        size="lg" 
        rounded="full" 
        to="/signup"
      >
        {t('cta.getStarted')}
      </CtaButton>
      
      {/* Secondary CTA - Demo Store */}
      <CtaButton 
        variant="outline" 
        size="lg" 
        rounded="full" 
        to="/demo"
      >
        {t('cta.demoStore')}
      </CtaButton>
      
      {/* Tertiary CTA - Learn More */}
      <CtaButton 
        variant="ghost" 
        size="lg" 
        to="/features"
      >
        {t('cta.learnMore')}
      </CtaButton>
    </div>
  );
}
