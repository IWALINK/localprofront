import { Clock, DollarSign, Settings, Smartphone, Zap, TrendingUp, Users, Building, Shield, BarChart3, LucideIcon } from 'lucide-react';
import BenefitCard from './benefits/BenefitCard';
import CostComparison from './benefits/CostComparison';
import SectionHeader from './benefits/SectionHeader';
import { ArrowRightIcon, CheckIcon } from './benefits/BenefitIcons';
import BenefitsCarousel from './benefits/BenefitsCarousel';

const Benefits = () => {
  const benefitCards = [
    {
      icon: DollarSign,
      title: "Économies substantielles",
      description: "Seulement 99 CHF par mois, contre 4 000 à 5 000 CHF pour un secrétaire humain en Suisse romande.",
      footer: (
        <div className="text-sm font-medium flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">99 CHF</span>
          <span className="text-muted-foreground">par mois</span>
        </div>
      ),
      illustration: (
        <div className="my-4 flex justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <DollarSign className="h-12 w-12 text-primary" />
          </div>
        </div>
      )
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "L'AI répond aux appels à tout moment, sans interruption, pour ne jamais rater une opportunité commerciale.",
      footer: (
        <div className="flex gap-1 text-primary">
          <div className="h-1.5 w-6 rounded-full bg-primary"></div>
          <div className="h-1.5 w-6 rounded-full bg-primary"></div>
          <div className="h-1.5 w-6 rounded-full bg-primary"></div>
          <div className="h-1.5 w-6 rounded-full bg-primary"></div>
          <div className="h-1.5 w-6 rounded-full bg-primary"></div>
        </div>
      ),
      imageUrl: "/lovable-uploads/27777653-16f4-4834-bf00-ead76b03f825.png",
      imageAlt: "Robot répondant aux appels 24/7"
    },
    {
      icon: Settings,
      title: "Personnalisation avancée",
      description: "Chaque AI est configurée avec un système RAG adapté à votre secteur (menus pour restaurants, créneaux pour avocats, etc.).",
      footer: (
        <div className="text-sm font-medium text-muted-foreground">
          Solution sur mesure pour votre entreprise
        </div>
      ),
      illustration: (
        <div className="my-4 flex justify-center">
          <div className="relative w-28 h-28">
            <div className="absolute top-0 left-0 w-20 h-20 bg-blue-50 rounded-lg rotate-12"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/10 rounded-lg -rotate-12"></div>
            <div className="absolute inset-4 flex items-center justify-center">
              <Settings className="h-10 w-10 text-primary animate-spin-slow" />
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Smartphone,
      title: "Facilité d'utilisation",
      description: "Recevez des notifications en temps réel via une application personnalisée pour suivre commandes, réservations ou rendez-vous.",
      footer: (
        <div className="text-sm font-medium text-muted-foreground">
          Interface intuitive et accessible
        </div>
      ),
      illustration: (
        <div className="my-4 flex justify-center">
          <div className="relative w-16 h-28 border-2 border-gray-300 rounded-xl bg-gray-100 flex flex-col items-center overflow-hidden">
            <div className="w-10 h-1 bg-gray-300 my-1 rounded-full"></div>
            <div className="flex-1 w-full bg-white p-1">
              <div className="w-full h-2 bg-primary/20 rounded mb-1"></div>
              <div className="w-3/4 h-2 bg-primary/20 rounded mb-1"></div>
              <div className="w-1/2 h-2 bg-primary/20 rounded"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center my-1">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Zap,
      title: "Intégration simple",
      description: "Nous connectons votre numéro existant via Twilio, pas de changement nécessaire. Mise en place rapide et sans interruption.",
      footer: (
        <div className="text-sm font-medium text-muted-foreground">
          Aucune modification de votre infrastructure
        </div>
      ),
      illustration: (
        <div className="my-4 flex justify-center">
          <div className="relative w-28 h-20">
            <div className="absolute left-0 top-0 w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
              <div className="text-xs font-bold">API</div>
            </div>
            <div className="absolute right-0 top-0 w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-2">
              <Zap className="h-6 w-6 text-amber-400 absolute -top-2 left-1/2 -translate-x-1/2" />
              <div className="w-full h-0.5 bg-amber-400"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: CheckIcon as unknown as LucideIcon,
      title: "Aucun frais caché",
      description: "Un tarif unique et transparent qui inclut toutes les fonctionnalités et les mises à jour régulières du système.",
      footer: (
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 font-medium text-white hover:underline"
        >
          Je m'inscris aujourd'hui
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      ),
      isPrimary: true,
      illustration: (
        <div className="my-4 flex justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-white/30 rounded-full"></div>
            <div className="absolute inset-3 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-white/20 rounded-full animate-pulse"></div>
                <CheckIcon className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-cyan-100/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-blue-100/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-indigo-200/30 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          badge="Pourquoi choisir IWALINK"
          title="Avantages clés"
          subtitle="Notre solution offre des avantages significatifs pour votre entreprise, vous permettant de vous concentrer sur l'essentiel."
          icon={TrendingUp}
          illustration={
            <div className="mt-8 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-inner flex items-center justify-center">
                  <div className="relative w-28 h-28">
                    <div className="absolute top-0 left-0 w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                      <CheckIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute top-4 right-0 w-10 h-10 bg-amber-100 rounded-md flex items-center justify-center">
                      <Clock className="h-5 w-5 text-amber-500" />
                    </div>
                    <div className="absolute bottom-0 left-4 w-14 h-14 bg-blue-100 rounded-md flex items-center justify-center">
                      <DollarSign className="h-8 w-8 text-blue-500" />
                    </div>
                    <TrendingUp className="absolute bottom-6 right-2 h-7 w-7 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          }
        />
        
        <BenefitsCarousel benefitCards={benefitCards} />
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <div className="benefit-detail-card group">
            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 aspect-video group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/5"></div>
              
              <div className="relative flex items-center justify-center w-full h-full p-0">
                <img 
                  src="/lovable-uploads/b285b6bc-71ea-4c20-a705-900a39b12577.png" 
                  alt="Économies réalisées avec IA vs humain" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Économisez jusqu'à 98% sur vos coûts</h3>
              <p className="text-muted-foreground">
                Remplacez le coût d'un secrétaire temps plein (4000-5000 CHF/mois) par notre solution à seulement 99 CHF par mois. 
                Une économie considérable qui vous permet de réinvestir dans le développement de votre entreprise.
              </p>
            </div>
          </div>
          
          <div className="benefit-detail-card group">
            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 aspect-video group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-indigo-600/5"></div>
              
              <div className="relative flex items-center justify-center w-full h-full p-0">
                <img 
                  src="/lovable-uploads/27777653-16f4-4834-bf00-ead76b03f825.png" 
                  alt="Robot répondant aux appels 24/7" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">Disponibilité permanente</h3>
              <p className="text-muted-foreground">
                Contrairement à un employé qui travaille selon des horaires fixes, notre secrétaire virtuelle reste 
                opérationnelle 24h/24, 7j/7, y compris les weekends et jours fériés, sans coûts supplémentaires.
              </p>
            </div>
          </div>
          
          <div className="benefit-detail-card group">
            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 aspect-video group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-cyan-600/5"></div>
              
              <div className="relative flex items-center justify-center w-full h-full p-0">
                <img 
                  src="/lovable-uploads/f080fa0a-9b6c-4594-a2d3-7bb8460378f5.png" 
                  alt="Intégration technique et API" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-800">Intégration transparente</h3>
              <p className="text-muted-foreground">
                Notre solution s'intègre directement à votre numéro de téléphone existant via Twilio, 
                sans nécessiter de changements dans votre infrastructure. L'installation est rapide et 
                sans perturbation pour votre activité.
              </p>
            </div>
          </div>
          
          <div className="benefit-detail-card group">
            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 aspect-video group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-600/5"></div>
            
              <div className="relative flex items-center justify-center w-full h-full p-0">
                <img 
                  src="/lovable-uploads/d6c775b4-e20a-4f3f-bc81-4183509df99a.png" 
                  alt="Adaptation sectorielle et personnalisation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">Adapté à votre secteur</h3>
              <p className="text-muted-foreground">
                Que vous soyez dans la restauration, les services juridiques, la santé ou le commerce de détail, 
                notre solution est personnalisée pour répondre aux spécificités de votre secteur, avec un langage 
                et des connaissances adaptés.
              </p>
            </div>
          </div>
        </div>
      
        <CostComparison />
      </div>
    </section>
  );
};

export default Benefits;
