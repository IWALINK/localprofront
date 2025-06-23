
import { useState } from 'react';
import { StarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Pierre Martin",
    business: "Pizzeria La Romana",
    testimonial: "Grâce à IWALINK, je peux me concentrer sur la préparation de mes pizzas pendant que l'AI gère mes commandes de livraison. Mes ventes ont augmenté, et je suis beaucoup moins stressé !",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Sophie Dubois",
    business: "Cabinet d'avocats Dubois",
    testimonial: "IWALINK a révolutionné la gestion de mes rendez-vous. Je ne manque plus jamais un client potentiel, même en dehors des heures de bureau. Un investissement qui en vaut largement la peine.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Jean Lefebvre",
    business: "Plomberie Lefebvre",
    testimonial: "En tant que plombier, je suis souvent sur le terrain et je manquais beaucoup d'appels. Avec IWALINK, tous mes appels sont pris en charge et je reçois instantanément les détails des urgences.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>Ils nous font confiance</span>
          </div>
          <h2 className="section-title">Témoignages clients</h2>
          <p className="section-subtitle">
            Découvrez comment IWALINK a transformé le quotidien de nos clients et amélioré leur efficacité.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative glass-card p-8 md:p-12 rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-iwa-blue to-iwa-lightblue"></div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                    <StarIcon key={i + testimonials[activeIndex].rating} className="h-5 w-5 text-gray-200 fill-gray-200" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl font-medium mb-6 text-foreground">
                  "{testimonials[activeIndex].testimonial}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="mr-4 w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonials[activeIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[activeIndex].business}</div>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center gap-3">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    aria-label="Témoignage précédent"
                  >
                    <ChevronLeft className="h-5 w-5 text-muted-foreground" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                    aria-label="Témoignage suivant"
                  >
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </button>
                  <div className="text-sm text-muted-foreground ml-3">
                    {activeIndex + 1} / {testimonials.length}
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-[80%] glass-card p-6 rounded-xl shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                          <PhoneIcon className="h-5 w-5" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">Appel client</div>
                          <div className="text-xs text-muted-foreground">traité par IWALINK</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <div className="bg-blue-100 rounded-lg p-2 text-xs max-w-[80%]">
                            Bonjour, je voudrais commander une pizza pour livraison.
                          </div>
                        </div>
                        <div className="flex items-start justify-end">
                          <div className="bg-primary text-white rounded-lg p-2 text-xs max-w-[80%]">
                            Bien sûr ! Quelle pizza souhaitez-vous commander et pour quelle adresse ?
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-blue-100 rounded-lg p-2 text-xs max-w-[80%]">
                            Une Margherita, livrée au 24 rue du Lac.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span>Prêt à commencer ?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Rejoignez les entreprises qui transforment leur gestion d'appels</h2>
            <a 
              href="#contact" 
              className="button-primary inline-flex"
            >
              Je souhaite en savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom icon
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default Testimonials;
