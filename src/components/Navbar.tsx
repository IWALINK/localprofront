
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Only check sections on homepage
      if (location.pathname === '/') {
        // Get all sections and their positions
        const sections = ['accueil', 'how-it-works', 'benefits', 'contact'];
        let currentSection = '';
        
        // Find the section closest to the viewport top
        let minDistance = Infinity;
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Calculate distance from top of viewport
            const distance = Math.abs(rect.top);
            
            // If this section is closer to the viewport top than others we've seen
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = sectionId;
            }
          }
        }
        
        // Set the active section
        if (currentSection) {
          setActiveSection(currentSection);
          
          // Update URL hash without scrolling
          if (history.pushState) {
            history.pushState(null, null, `#${currentSection}`);
          }
        }
      } else {
        // If we're not on the homepage, clear the activeSection
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check hash on initial load
    if (location.hash) {
      setActiveSection(location.hash.substring(1));
      
      // Scroll to the element with the ID matching the hash
      const targetElement = document.getElementById(location.hash.substring(1));
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      // Check which section is currently in view on initial load
      handleScroll();
    } else {
      // Clear active section if we're not on homepage
      setActiveSection('');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Handle hash change
  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash.substring(1));
      
      // Scroll to the element with the ID matching the hash
      const targetElement = document.getElementById(location.hash.substring(1));
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      // If on homepage but no hash, check which section is in view
      const sections = ['accueil', 'how-it-works', 'benefits', 'contact'];
      let closestSection = '';
      let minDistance = Infinity;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = sectionId;
          }
        }
      }
      
      if (closestSection) {
        setActiveSection(closestSection);
      }
    } else {
      // If we're not on the homepage, clear the activeSection
      setActiveSection('');
    }
  }, [location.hash, location.pathname]);

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (hash: string) => {
    // For non-homepage links (like About), we should check the pathname
    if (hash === '#about-page' && location.pathname === '/about') {
      return true;
    }
    
    // For homepage sections, check if it matches the activeSection
    if (hash === '#accueil' && (activeSection === 'accueil' || activeSection === '') && location.pathname === '/') {
      return true;
    }
    
    return location.pathname === '/' && hash === `#${activeSection}`;
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetHash: string) => {
    e.preventDefault();
    const sectionId = targetHash.substring(1);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and then scroll
      navigate(`/${targetHash}`);
    } else {
      // If already on home page, just scroll
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', targetHash);
        setActiveSection(sectionId);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm' : 'py-3 md:py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <img 
            src="/lovable-uploads/f3662114-5be1-4206-afa5-de85330f17f1.png" 
            alt="IWA Logo" 
            className="h-8 md:h-10"
          />
          <span className="text-[6px] md:text-[8px] font-medium text-iwa-red">Local Pro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a 
            href="#accueil" 
            className={`text-xs lg:text-sm font-medium transition-all duration-300 relative ${
              isActive('#accueil') 
                ? 'text-iwa-red after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-iwa-red after:rounded-full after:scale-100' 
                : 'text-foreground hover:text-iwa-red after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-iwa-red after:rounded-full after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300'
            }`}
            onClick={(e) => handleNavigation(e, '#accueil')}
          >
            Accueil
          </a>
          <a 
            href="#how-it-works" 
            className={`text-xs lg:text-sm font-medium transition-all duration-300 relative ${
              isActive('#how-it-works') 
                ? 'text-iwa-red after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-iwa-red after:rounded-full after:scale-100' 
                : 'text-foreground hover:text-iwa-red after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-iwa-red after:rounded-full after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300'
            }`}
            onClick={(e) => handleNavigation(e, '#how-it-works')}
          >
            Comment ça marche
          </a>
          <a 
            href="#benefits" 
            className={`text-xs lg:text-sm font-medium transition-all duration-300 relative ${
              isActive('#benefits') 
                ? 'text-iwa-red after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-iwa-red after:rounded-full after:scale-100' 
                : 'text-foreground hover:text-iwa-red after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-iwa-red after:rounded-full after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300'
            }`}
            onClick={(e) => handleNavigation(e, '#benefits')}
          >
            Avantages
          </a>
          <Link 
            to="/about" 
            onClick={scrollToTop}
            className={`text-xs lg:text-sm font-medium transition-all duration-300 relative ${
              location.pathname === '/about' 
                ? 'text-iwa-red after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-iwa-red after:rounded-full after:scale-100' 
                : 'text-foreground hover:text-iwa-red after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-iwa-red after:rounded-full after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300'
            }`}
          >
            À propos
          </Link>
          <a 
            href="#contact" 
            className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-md text-white text-xs lg:text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
              isActive('#contact') ? 'bg-iwa-darkred' : 'bg-iwa-red hover:bg-iwa-darkred'
            }`}
            onClick={(e) => handleNavigation(e, '#contact')}
          >
            Nous contacter
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 pb-4 pt-2 px-4 animate-fade-down">
          <nav className="flex flex-col space-y-3 px-2">
            <a 
              href="#accueil" 
              className={`py-2 font-medium transition-colors duration-300 ${isActive('#accueil') ? 'text-iwa-red' : 'text-foreground'}`}
              onClick={(e) => {
                handleNavigation(e, '#accueil');
                handleMobileMenuClose();
              }}
            >
              Accueil
            </a>
            <a 
              href="#how-it-works" 
              className={`py-2 font-medium text-left transition-colors duration-300 ${isActive('#how-it-works') ? 'text-iwa-red' : 'text-foreground'}`}
              onClick={(e) => {
                handleNavigation(e, '#how-it-works');
                handleMobileMenuClose();
              }}
            >
              Comment ça marche
            </a>
            <a 
              href="#benefits" 
              className={`py-2 font-medium text-left transition-colors duration-300 ${isActive('#benefits') ? 'text-iwa-red' : 'text-foreground'}`}
              onClick={(e) => {
                handleNavigation(e, '#benefits');
                handleMobileMenuClose();
              }}
            >
              Avantages
            </a>
            <Link 
              to="/about" 
              className={`py-2 font-medium transition-colors duration-300 ${location.pathname === '/about' ? 'text-iwa-red' : 'text-foreground'}`}
              onClick={() => {
                handleMobileMenuClose();
                scrollToTop();
              }}
            >
              À propos
            </Link>
            <a 
              href="#contact" 
              className={`px-4 py-2 rounded-md text-white text-center font-medium w-full transition-all duration-300 transform hover:translate-y-[-2px] ${
                isActive('#contact') ? 'bg-iwa-darkred' : 'bg-iwa-red hover:bg-iwa-darkred'
              }`}
              onClick={(e) => {
                handleNavigation(e, '#contact');
                handleMobileMenuClose();
              }}
            >
              Nous contacter
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
