
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, LucideIcon } from 'lucide-react';
import BenefitCard from './BenefitCard';

interface BenefitCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  footer?: React.ReactNode;
  isPrimary?: boolean;
  illustration?: React.ReactNode;
}

interface BenefitsCarouselProps {
  benefitCards: BenefitCardData[];
}

const BenefitsCarousel: React.FC<BenefitsCarouselProps> = ({ benefitCards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [totalSlides, setTotalSlides] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newCardsPerView = 3;
      
      if (width < 640) {
        newCardsPerView = 1;
      } else if (width < 1024) {
        newCardsPerView = 2;
      } else {
        newCardsPerView = 3;
      }
      
      setCardsPerView(newCardsPerView);
      
      // Calculate total number of slides
      const newTotalSlides = Math.max(1, benefitCards.length - newCardsPerView + 1);
      setTotalSlides(newTotalSlides);
      
      // Ensure current index is valid after resize
      if (currentIndex >= newTotalSlides) {
        setCurrentIndex(newTotalSlides - 1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [benefitCards.length, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      const next = prev + 1;
      return next >= totalSlides ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      const next = prev - 1;
      return next < 0 ? totalSlides - 1 : next;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 75) {
      // Swipe left -> next slide
      nextSlide();
    } else if (touchEndX - touchStartX > 75) {
      // Swipe right -> previous slide
      prevSlide();
    }
  };

  return (
    <div className="relative mt-12 mb-16 px-4">
      {/* Simple background for the carousel container */}
      <div className="absolute inset-0 -z-10 rounded-md bg-gray-50"></div>
      
      {/* Main Carousel */}
      <div 
        ref={carouselRef}
        className="overflow-hidden rounded-md p-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {benefitCards.map((card, index) => (
            <div 
              key={index} 
              className="px-3 flex-shrink-0"
              style={{ 
                width: `${100 / cardsPerView}%`,
              }}
            >
              <BenefitCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                footer={card.footer}
                isPrimary={card.isPrimary}
                illustration={card.illustration}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-100 rounded-md p-2 z-10 transition-colors hover:bg-gray-50"
        aria-label="Précédent"
      >
        <ChevronLeft className="h-6 w-6 text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-100 rounded-md p-2 z-10 transition-colors hover:bg-gray-50"
        aria-label="Suivant"
      >
        <ChevronRight className="h-6 w-6 text-primary" />
      </button>

      {/* Dots indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-colors ${
                currentIndex === index 
                  ? 'w-6 bg-iwa-red' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BenefitsCarousel;
