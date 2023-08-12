// Copyright rigélblu inc. All rights reserved.
import clsx from 'clsx';
import NextLink from 'next/link';
import { Button as PrimeButton, ButtonProps as PrimeButtonProps } from 'primereact/button';
import { HTMLAttributes, ReactNode } from 'react';

export enum LinkCTA {
  Primary = 'Primary',
  // TODO: consider adding secondary
}

// ----------
// Link
type LinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  cta?: LinkCTA;
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
      className={clsx('mgn-link', ctaClasses)}
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
      className={clsx('mgn-button rounded border-r-4 border-none px-2 py-1', className)}
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
export enum CTARole {
  Primary = 'Primary',
  Secondary = 'Secondary',
}

interface CTAButtonProps extends PrimeButtonProps {
  role?: CTARole;
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
      className={clsx('mgn-ctabutton', ctaClasses[role], className)}
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
