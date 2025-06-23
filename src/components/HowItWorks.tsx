import { CheckCircle, Phone, Settings, Bell } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HowItWorks = () => {
  const isMobile = useIsMobile();
  
  return <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span>Simple et efficace</span>
          </div>
          <h2 className="section-title">Comment ça marche</h2>
          <p className="section-subtitle">
            Notre service de secrétaire virtuel s'intègre parfaitement à votre entreprise en seulement quelques étapes simples.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-12">
            <div className="staggered-item">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Connexion de votre numéro
                  </h3>
                  <p className="text-muted-foreground">
                    Nous connectons votre numéro d'entreprise existant à nos serveurs sécurisés, sans aucun besoin de changer de numéro.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="staggered-item">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Configuration personnalisée
                  </h3>
                  <p className="text-muted-foreground">
                    Nous configurons votre assistante virtuelle selon vos besoins spécifiques, adaptée à votre métier et à vos process.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="staggered-item">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Notification instantanée
                  </h3>
                  <p className="text-muted-foreground">
                    Recevez des notifications en temps réel pour toute nouvelle demande via notre application intuitive LocalPro.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="w-full flex justify-center md:justify-start">
              <a href="#contact" className="button-primary inline-flex items-center gap-2 staggered-item justify-center">
                Demander une démonstration
                <CheckCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-200/20 to-white rotate-6 transform"></div>
            <div className="relative glass-card p-6 rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg flex items-center justify-center p-6">
                <div className="max-w-full w-full">
                  <div className="mb-6">
                    <div className="h-8 bg-gradient-to-r from-iwa-blue to-iwa-lightblue rounded-md flex items-center px-4">
                      <span className="text-white text-xs font-medium">Appel en cours...</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3 items-center bg-white p-3 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Phone className="w-3 h-3 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium">Appel client entrant</div>
                        <div className="text-xs text-muted-foreground">Il y a 2 minutes</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-center bg-white p-3 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium">Réservation confirmée</div>
                        <div className="text-xs text-muted-foreground">Table pour 4, ce soir à 20h</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-center bg-white p-3 rounded-lg shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Bell className="w-3 h-3 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium">Nouvelle commande</div>
                        <div className="text-xs text-muted-foreground">Pizza Margherita + boissons</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HowItWorks;
