
import { useRef, useEffect } from 'react';

interface Client {
  name: string;
  logoPath: string;
}

interface ClientsCarouselProps {
  clients: Client[];
  speed?: number;
  direction?: 'left' | 'right';
}

const ClientsCarousel = ({ clients, speed = 1, direction = 'left' }: ClientsCarouselProps) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!outerRef.current || !innerRef.current) return;
    
    // Clone items for infinite scroll effect
    const originalContent = innerRef.current.innerHTML;
    innerRef.current.innerHTML = originalContent + originalContent;
    
    let animationId: number;
    let scrollPos = 0;
    const scrollDirection = direction === 'left' ? 1 : -1;
    
    const animate = () => {
      if (!outerRef.current || !innerRef.current) return;
      
      scrollPos += speed * 0.5 * scrollDirection;
      
      // Reset position when one full cycle is completed
      const containerWidth = innerRef.current.scrollWidth / 2;
      if (Math.abs(scrollPos) >= containerWidth) {
        scrollPos = 0;
      }
      
      innerRef.current.style.transform = `translateX(${scrollPos * -1}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationId = requestAnimationFrame(animate);
    
    // Pause animation when tab is inactive to save resources
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animationId = requestAnimationFrame(animate);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Stop animation on mouse hover (optional)
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => { animationId = requestAnimationFrame(animate); };
    
    outerRef.current.addEventListener('mouseenter', handleMouseEnter);
    outerRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (outerRef.current) {
        outerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        outerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [speed, direction]);
  
  return (
    <div 
      ref={outerRef}
      className="overflow-hidden w-full"
      aria-label="Nos clients"
    >
      <div 
        ref={innerRef}
        className="flex items-center"
      >
        {clients.map((client, index) => (
          <div 
            key={index}
            className="client-card flex-shrink-0 w-48 md:w-56 p-4 mx-4 rounded-lg  hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center"
          >
            <div className="w-full h-24 md:h-32 relative mb-4 overflow-hidden rounded-md bg-transparent flex items-center justify-center">
              <img 
                src={client.logoPath}
                alt={`Logo ${client.name}`}
                className="w-full h-full object-contain"
              />
              {/* <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                <span className="text-lg font-bold text-iwa-red">{client.name}</span>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;
