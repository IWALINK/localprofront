import { Trophy, Users, Heart } from "lucide-react";
import { Button } from "./ui/button";
const Sponsorship = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background décoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-5 -top-5 w-40 h-40 md:w-64 md:h-64 rounded-full bg-iwa-red animate-pulse-slow"></div>
        <div className="absolute -left-5 -bottom-5 w-40 h-40 md:w-64 md:h-64 rounded-full bg-iwa-blue animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Image côté */}
            <div
              className="relative h-full flex items-center justify-center p-6 md:p-8"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="relative w-full h-full min-h-[280px] md:min-h-[320px] rounded-xl overflow-hidden transform transition-transform duration-700 hover:scale-[1.02]">
                <img
                  src="/lovable-uploads/footteam.png"
                  alt="Équipe féminine AF Luc-Dorigny football Club"
                  className="object-cover w-full h-full rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white text-sm md:text-base font-medium">
                    Équipe féminine AF Luc-Dorigny
                  </span>
                </div>
              </div>
            </div>

            {/* Contenu côté */}
            <div
              className="p-6 md:p-8"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-iwa-red/10 text-iwa-red text-sm font-medium mb-4 animate-pulse-light">
                <Trophy className="w-4 h-4 mr-2" /> Fiers sponsors
              </div>

              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 relative">
                IWALINK soutient le football féminin
                <span className="absolute -bottom-1 left-0 w-16 h-1 bg-iwa-red/30 rounded"></span>
              </h2>

              <p className="text-muted-foreground mb-6">
                Nous sommes fiers d'être les sponsors officiels de l'équipe
                féminine de AF Luc-Dorigny football Club EPFL UNIL. Notre
                engagement reflète nos valeurs d'excellence, de collaboration et
                d'innovation.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-1">
                  <div className="w-8 h-8 rounded-full bg-iwa-blue/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-iwa-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">
                      Soutien à la communauté
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Nous investissons dans les talents locaux et l'égalité
                      dans le sport.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-1">
                  <div className="w-8 h-8 rounded-full bg-iwa-red/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-iwa-red" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Partage de valeurs</h3>
                    <p className="text-sm text-muted-foreground">
                      Excellence, travail d'équipe et détermination - des
                      valeurs que nous partageons.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {/* Button commented out as requested */}
                {/* <Button variant="outline" className="bg-white hover:bg-iwa-blue/5">
                  En savoir plus
                </Button> */}
                <Button className="bg-iwa-blue hover:bg-iwa-darkblue text-white transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
                  Voir les matchs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
