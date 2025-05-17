import { Link } from '@remix-run/react';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/lib/utils';

// Define button variants using class-variance-authority
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        // Add our elegant CTA variant
        cta: 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-12 rounded-md px-10 text-base',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
);

// Define button props including all variants
export interface CtaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  to?: string;
}

/**
 * CtaButton Component
 * 
 * A versatile button component with multiple style variants, including an elegant CTA style.
 * Can render as a button or a Link component based on the presence of the 'to' prop.
 * 
 * @example
 * // Basic CTA button
 * <CtaButton variant="cta" size="lg" rounded="full">{t('cta.getStarted')}</CtaButton>
 * 
 * // CTA button as a link
 * <CtaButton variant="cta" to="/signup" size="lg" rounded="full">{t('cta.getStarted')}</CtaButton>
 */
const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ className, variant, size, rounded, to, ...props }, ref) => {
    // If 'to' prop is provided, render as a Link
    if (to) {
      return (
        <Link
          to={to}
          className={cn(buttonVariants({ variant, size, rounded, className }))}
        >
          {props.children}
        </Link>
      );
    }

    // Otherwise render as a button
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

CtaButton.displayName = 'CtaButton';

export { CtaButton, buttonVariants };
