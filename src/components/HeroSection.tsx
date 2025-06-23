import {
  ArrowRight,
  Phone,
  Calendar,
  MessageSquare,
  Settings2,
} from "lucide-react";
const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50">
      {/* Cercles et formes décoratives animés */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -right-20 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-100/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-indigo-300/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-1/4 -left-10 w-32 h-32 border border-blue-200/40 rounded-full"></div>
        <div className="absolute bottom-1/3 right-10 w-24 h-24 border border-indigo-200/40 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-blue-100/50 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-indigo-100/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-indigo-400/20 text-primary text-sm font-medium mb-4 md:mb-6 animate-fade-in shadow-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
              Révolutionnez votre service client
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 max-w-5xl mx-auto leading-tight opacity-0 animate-fade-in-delay-1 tracking-tight">
            Votre{" "}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-indigo-600">
                secrétaire virtuelle
              </span>
              <svg
                className="absolute -bottom-3 left-0 w-full h-3 text-blue-200/70"
                viewBox="0 0 200 9"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 C50,0 150,0 200,8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>{" "}
            disponible 24/7 à prix réduit
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 opacity-0 animate-fade-in-delay-2">
            IWALINK fournit un service Local Pro qui est spécialement conçu pour
            les entreprises : un secrétaire IA personnalisé, capable de prendre
            en charge tous vos besoins de communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center opacity-0 animate-fade-in-delay-3 mb-16">
            <a
              href="#how-it-works"
              className="button-primary group flex items-center gap-2 w-full sm:w-auto text-center justify-center shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              Découvrir comment ça marche
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="button-outline w-full sm:w-auto text-center justify-center flex hover:bg-gradient-to-r hover:from-white hover:to-blue-50"
            >
              Nous contacter
            </a>
          </div>

          {/* Nouvelle section de vignettes avec images explicatives */}
          <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 opacity-0 animate-fade-in-delay-4">
            {/* Fonctionnalité 1: Gestion des appels */}
            <div className="feature-card overflow-hidden group">
              <div className="aspect-video mb-4 rounded-xl overflow-hidden relative bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="w-full h-full flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 opacity-10 bg-blue-500 group-hover:opacity-20 transition-opacity duration-300"></div>

                  {/* Image de gestion des appels */}
                  <img
                    src="/lovable-uploads/ed54a5bd-23c0-4dfa-92b8-3c5b3bac4a16.png"
                    alt="Gestion intelligente des appels"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">
                Gestion intelligente des appels
              </h3>
              <p className="text-muted-foreground text-sm">
                Notre IA répond à vos appels avec une voix naturelle et comprend
                les besoins de vos clients 24h/24.
              </p>
            </div>

            {/* Fonctionnalité 2: Réservations */}
            <div className="feature-card overflow-hidden group">
              <div className="aspect-video mb-4 rounded-xl overflow-hidden relative bg-gradient-to-br from-indigo-50 to-blue-50">
                <div className="w-full h-full flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 opacity-10 bg-indigo-500 group-hover:opacity-20 transition-opacity duration-300"></div>

                  {/* Image de système de réservation */}
                  <img
                    src="/lovable-uploads/49addd6a-4cbe-4f23-8f40-caeac4e85618.png"
                    alt="Système de réservation avancé"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">
                Système de réservation avancé
              </h3>
              <p className="text-muted-foreground text-sm">
                Gestion automatique des rendez-vous avec synchronisation directe
                de votre calendrier.
              </p>
            </div>

            {/* Fonctionnalité 3: Messages et notifications */}
            <div className="feature-card overflow-hidden group">
              <div className="aspect-video mb-4 rounded-xl overflow-hidden relative bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="w-full h-full flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 opacity-10 bg-cyan-500 group-hover:opacity-20 transition-opacity duration-300"></div>

                  {/* Image de notifications en temps réel */}
                  <img
                    src="/lovable-uploads/4971d578-7042-44ed-be2b-3de7b69dad43.png"
                    alt="Notifications en temps réel"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">
                Notifications en temps réel
              </h3>
              <p className="text-muted-foreground text-sm">
                Recevez instantanément des alertes pour chaque interaction
                client avec des résumés détaillés.
              </p>
            </div>

            {/* Fonctionnalité 4: Personnalisation */}
            <div className="feature-card overflow-hidden group">
              <div className="aspect-video mb-4 rounded-xl overflow-hidden relative bg-gradient-to-br from-cyan-50 to-blue-50">
                <div className="w-full h-full flex items-center justify-center p-2 transition-transform duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 opacity-10 bg-blue-500 group-hover:opacity-20 transition-opacity duration-300"></div>

                  {/* Image de personnalisation sectorielle */}
                  <img
                    src="/lovable-uploads/fec91db9-793b-49ed-9ca2-86d5f39cd6bc.png"
                    alt="Personnalisation sectorielle"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">
                Personnalisation sectorielle
              </h3>
              <p className="text-muted-foreground text-sm">
                Adapté spécifiquement à votre domaine: restauration, services
                juridiques, santé et plus encore.
              </p>
            </div>
          </div>

          {/* Section des statistiques avec design amélioré et scroll reveal */}
          <div
            className="mt-16 md:mt-24 w-full max-w-5xl glass-card p-8 md:p-10 opacity-0 animate-fade-in-delay-4 bg-white/70 backdrop-blur-md shadow-xl rounded-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="text-sm font-medium text-center text-primary uppercase tracking-wide mb-5 md:mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
                Des chiffres qui parlent d'eux-mêmes
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
              <div
                className="stat-card bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg shadow-blue-100/50 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-br from-primary to-blue-700">
                  99 CHF
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  par mois seulement
                </div>
              </div>
              <div
                className="stat-card bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 shadow-lg shadow-indigo-100/50 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/60"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-indigo-700">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  disponibilité
                </div>
              </div>
              <div
                className="stat-card bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-6 shadow-lg shadow-cyan-100/50 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-100/60"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-cyan-700">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  personnalisable
                </div>
              </div>
              <div
                className="stat-card bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg shadow-blue-100/50 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-blue-700">
                  0
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  appel manqué
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
