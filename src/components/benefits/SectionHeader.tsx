
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  illustration?: React.ReactNode;
  icon?: LucideIcon;
}

const SectionHeader = ({ 
  badge, 
  title, 
  subtitle, 
  illustration, 
  icon: Icon 
}: SectionHeaderProps) => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-16">
      {badge && (
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-normal mb-6">
          {Icon && <Icon className="h-4 w-4 mr-2" />}
          <span>{badge}</span>
        </div>
      )}
      <h2 className="section-title font-medium">{title}</h2>
      <p className="section-subtitle font-light">
        {subtitle}
      </p>
      {illustration && (
        <div className="mt-8 flex justify-center">
          {illustration}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
