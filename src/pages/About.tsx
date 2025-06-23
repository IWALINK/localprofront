import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Send,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero Section - L'entreprise derrière Helioz */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  L'entreprise derrière Local Pro
                </h1>
                <p className="text-muted-foreground mb-6">
                  IWALINK SA est une entreprise technologique suisse qui place l'innovation au 
                  cœur de son action. Basée au 59, rue de Lyon, 1203 Genève, Suisse, 
                  elle s'engage à créer des solutions concrètes et durables pour répondre aux besoins de ses communautés.
                  Aujourd'hui, IWALINK est fière de présenter son projet de secrétaire 
                  IA personnalisé pour aider les entreprises à mieux réussir.
                </p>
              </div>
              <div>
                <img
                  src="/lovable-uploads/1c03682b-20d6-4476-b332-83e6bed420df.png"
                  alt="Équipe IWALINK en réunion"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Localisation et Infrastructure */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="md:order-1 order-2">
                <img
                  src="/lovable-uploads/706f4a90-73bf-4928-a442-9f1045c7def6.png"
                  alt="Bureaux IWALINK"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
              <div className="md:order-2 order-1">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">
                  Localisation et Infrastructure
                  <div className="w-24 h-1 bg-iwa-red mx-auto mt-4"></div>
                </h2>
                <p className="text-muted-foreground mb-6 text-center">
                  Nous disposons d'un bureau opérationnel à Genève (rue de Lyon 59, 1203) et d'un siège administratif à
                  Nyon (Chemin du joran 1). Cette présence sur le
                  terrain nous permet d'être au plus près de nos collaborateurs
                  et partenaires, afin de développer des technologies qui
                  répondent vraiment aux enjeux actuels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Restons en Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">
              Restons en Contact
              <div className="w-24 h-1 bg-iwa-red mx-auto mt-4"></div>
            </h2>
            <p className="text-muted-foreground mb-10 text-center max-w-3xl mx-auto">
              Vous avez des questions sur notre projet, souhaitez participer ou
              simplement en savoir plus ? Remplissez le formulaire ci-dessous ou
              retrouvez-nous sur nos réseaux sociaux. Notre équipe est à votre
              disposition pour échanger autour de cette solution et envisager
              ensemble un accès à l'énergie plus durable pour tous.
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold mb-6">Contactez-nous</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Vous avez des questions sur notre projet, souhaitez
                    participer ou simplement en savoir plus ? Remplissez le
                    formulaire ci-dessous ou retrouvez-nous sur nos réseaux
                    sociaux. Notre équipe est à votre disposition pour échanger
                    autour de cette solution et envisager ensemble un accès à
                    l'énergie plus durable pour tous.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase text-muted-foreground mb-2">
                        Adresse
                      </h4>
                      <p className="text-sm">
                       Rue de Lyon 59
                        <br />
                       1203 Genève, Suisse
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-muted-foreground mb-2">
                        Email
                      </h4>
                      <a
                        href="mailto:info@iwalink.ch"
                        className="text-sm text-iwa-red hover:underline"
                      >
                        info@iwalink.ch
                      </a>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-muted-foreground mb-2">
                        Téléphone
                      </h4>
                      <a href="tel:+41223020404" className="text-sm">
                        +41 22 362 04 04
                      </a>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Nom"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iwa-red/50"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iwa-red/50"
                      />
                      <input
                        type="text"
                        placeholder="Sujet"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iwa-red/50"
                      />
                      <textarea
                        placeholder="Créez un message ici"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-iwa-red/50 min-h-[120px]"
                      ></textarea>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center bg-iwa-red text-white px-6 py-3 rounded-full hover:bg-iwa-darkred transition-colors font-medium"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer
                      </button>
                    </div>
                  </form>

                  <div className="mt-8">
                    <p className="text-sm font-medium mb-2">Nous suivre</p>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-gray-500 hover:text-iwa-red transition-colors"
                      >
                        <Facebook size={16} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-iwa-red transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-iwa-red transition-colors"
                      >
                        <Instagram size={16} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-iwa-red transition-colors"
                      >
                        <Globe size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="/lovable-uploads/2da1bb67-fc75-4c77-ad97-b82213f9de63.png"
                  alt="Présentation IWALINK"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
