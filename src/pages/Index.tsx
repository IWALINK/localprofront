
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeader from '@/components/benefits/SectionHeader';
import ClientsCarousel from '@/components/clients/ClientsCarousel';
import Sponsorship from '@/components/Sponsorship';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const location = useLocation();
  const initialScrollDone = useRef(false);

  useEffect(() => {
    // Initialize AOS with enhanced configuration
    AOS.init({
      duration: 1000,
      once: false, // Changed to false to allow animations to occur every time the element comes into view
      easing: 'ease-out',
      offset: 120, // Trigger animations a bit earlier
      delay: 100, // Slight delay for more natural feel
      mirror: true, // Animations will trigger each time the element comes into view
      anchorPlacement: 'top-bottom', // Element position that triggers the animation
    });
    
    // Handle initial scrolling if hash is present
    if (location.hash && !initialScrollDone.current) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Delay scrolling to ensure DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          initialScrollDone.current = true;
        }, 500);
      }
    }

    // Refresh AOS on window resize for responsive animations
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, [location.hash]);

  // Liste des clients avec leurs logos
  const clients = [
    { name: "Garage", logoPath: "/client/GARAGE.jpg" },
    { name: "Jet Goca", logoPath: "/client/jetgoca01r.jpg" },
    { name: "Fromagerie", logoPath: "/client/fromagerie01.jpg" },
    // { name: "Canvas", logoPath: "/client/CANVAS01.jpg" },
    { name: "Capillaire", logoPath: "/client/Capillaire.jpg" },
    { name: "Chinatown", logoPath: "/client/Chinatown.jpg" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="scroll-smooth">
        <section id="accueil" className='mt-20'>
          <HeroSection />
        </section>
        
        {/* Sponsorship Section - Added before Clients section */}
        <div data-aos="fade-up" data-aos-duration="1200">
          <Sponsorship />
        </div>
        
        {/* Nos Clients Section */}
        <section id="clients" className="py-10 md:py-16 bg-blue-50/50" data-aos="fade-up" data-aos-duration="1000">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionHeader
                badge="Ils nous font confiance"
                title="Nos Clients"
                subtitle="Découvrez les entreprises qui nous ont fait confiance pour leurs solutions d'assistance virtuelle."
              />
              
              <div className="mt-8 md:mt-12">
                <ClientsCarousel clients={clients} speed={1.5} direction="left" />
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
          <HowItWorks />
        </section>
        
        <section id="benefits" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
          <Benefits />
        </section>
        
        <section id="contact" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
