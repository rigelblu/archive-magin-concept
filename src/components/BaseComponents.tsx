// Copyright rigélblu inc. All rights reserved.
import NextLink from 'next/link';
import { Button as PrimeButton, ButtonProps as PrimeButtonProps } from 'primereact/button';
import { HTMLAttributes, ReactNode } from 'react';
import clsx, { cmpCls } from '@/lib/clsx-helpers';

export const LinkCTA = {
  Primary: 'Primary',
  // TODO: consider adding secondary
} as const;
export type LinkCTAType = (typeof LinkCTA)[keyof typeof LinkCTA];

// ----------
// Link
type LinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  cta?: LinkCTAType;
  external?: boolean;
  openInNewWindow?: boolean;
};

export function Link({
  children,
  href,
  className = '',
  cta = LinkCTA.Primary,
  external = false,
  openInNewWindow: new_window = false,
}: LinkProps & HTMLAttributes<HTMLAnchorElement>) {
  const ctaClasses = cta === LinkCTA.Primary ? clsx('text-blue-rb-600', className) : className;

  return (
    <NextLink
      className={clsx(cmpCls(Link.name), ctaClasses)}
      href={href}
      rel={external ? 'noreferrer noopener' : undefined}
      target={external || new_window ? '_blank' : undefined}
      // aria-label={external ? `${children} (opens in a new tab)`a: undefined}
    >
      {children}
    </NextLink>
  );
}

// ----------
// Button
export function Button({
  children,
  className = '',
  onClick,
  disabled,
  icon,
  iconPos,
  tooltip,
  tooltipOptions,
}: PrimeButtonProps) {
  return (
    <PrimeButton
      className={clsx(cmpCls(Button.name), 'rounded border-r-4 border-none px-2 py-1', className)}
      onClick={onClick}
      disabled={disabled}
      icon={icon}
      iconPos={iconPos}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
    >
      {children}
    </PrimeButton>
  );
}

// ----------
// Button - Call to Action
export const CTARole = {
  Primary: 'Primary',
  Secondary: 'Secondary',
} as const;
export type CTARoleType = (typeof CTARole)[keyof typeof CTARole];

interface CTAButtonProps extends PrimeButtonProps {
  role?: CTARoleType;
}
export function CTAButton({
  role = CTARole.Primary,
  children,
  className = '',
  onClick,
  disabled,
  icon,
  iconPos,
  tooltip,
  tooltipOptions,
}: CTAButtonProps) {
  const ctaClasses = {
    [CTARole.Primary]: 'bg-blue-rb-600 font-bold text-white',
    [CTARole.Secondary]: 'bg-gray-200 text-black',
  };

  return (
    <Button
      className={clsx(cmpCls(CTAButton.name), ctaClasses[role], className)}
      onClick={onClick}
      disabled={disabled}
      icon={icon}
      iconPos={iconPos}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
    >
      {children}
    </Button>
  );
}
