import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  color?: 'blue' | 'orange' | 'green' | 'teal';
  variant?: 'default' | 'hero' | 'gradient' | 'muted';
  container?: boolean;
}

const gradients = {
  blue: 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400',
  orange: 'bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-100',
  green: 'bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100',
  teal: 'bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-100',
};

const backgrounds = {
  blue: 'bg-blue-50',
  orange: 'bg-orange-50',
  green: 'bg-green-50',
  teal: 'bg-teal-50',
};

export function Section({
  children,
  className,
  color = 'blue',
  variant = 'default',
  container = true,
  ...props
}: SectionProps) {
  const baseStyles = 'relative py-16 md:py-20';
  
  const variantStyles = {
    default: 'bg-white',
    hero: `${gradients[color]} text-center px-4 flex flex-col items-center justify-center relative overflow-hidden`,
    gradient: gradients[color],
    muted: backgrounds[color],
  };

  const content = container ? (
    <div className="container mx-auto px-4">{children}</div>
  ) : (
    children
  );

  return (
    <section
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
}

export default Section; 