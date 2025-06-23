
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  footer?: React.ReactNode;
  isPrimary?: boolean;
  illustration?: React.ReactNode;
  gradient?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description, 
  footer, 
  isPrimary = false,
  illustration,
  imageUrl,
  imageAlt
}: BenefitCardProps) => {
  // Card background color
  const baseStyles = isPrimary 
    ? `bg-iwa-red text-white` 
    : `bg-gray-50`;

  // Icon background styles
  const iconBgStyles = isPrimary 
    ? "bg-white/20 text-white" 
    : "bg-iwa-red/10 text-iwa-red";

  const descriptionStyles = isPrimary 
    ? "text-white/90" 
    : "text-muted-foreground";

  return (
    <div className={`relative overflow-hidden p-6 rounded-md border ${isPrimary ? 'border-transparent' : 'border-gray-100'} ${baseStyles} w-full max-w-full transition-colors`}>
      <div className={`mb-4 w-12 h-12 rounded-md ${iconBgStyles} flex items-center justify-center`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-medium mb-3 break-words">{title}</h3>
      <p className={`${descriptionStyles} text-sm font-light mb-4 break-words`}>
        {description}
      </p>
      
      {imageUrl ? (
        <div className="my-4 overflow-hidden rounded-md">
          <img 
            src={imageUrl} 
            alt={imageAlt || `Illustration pour ${title}`} 
            className="w-full h-auto object-cover"
          />
        </div>
      ) : illustration ? (
        <div className="my-4">
          {illustration}
        </div>
      ) : null}
      
      {footer && (
        <div className="mt-auto pt-4 text-sm font-light">
          {footer}
        </div>
      )}
    </div>
  );
};

export default BenefitCard;
