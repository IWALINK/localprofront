import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Phone, ExternalLink, Trophy } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS for footer animations
    AOS.refresh();
  }, []);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetHash: string
  ) => {
    e.preventDefault();
    const sectionId = targetHash.substring(1);

    if (location.pathname !== "/") {
      // If not on home page, navigate to home and then scroll
      navigate(`/${targetHash}`);
    } else {
      // If already on home page, just scroll
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", targetHash);
      }
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 w-full">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            className="md:col-span-1"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <Link
              to="/"
              className="inline-block mb-4 transition-transform hover:scale-105 duration-300"
            >
              <span className="text-xl md:text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-iwa-blue to-iwa-lightblue">
                IWALINK
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm md:text-base break-words">
              Votre secrétaire virtuelle disponible 24/7 à prix réduit.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.08 10.08 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 link-hover"
                  onClick={(e) => handleNavigation(e, "#how-it-works")}
                >
                  Comment ça marche
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 link-hover"
                  onClick={(e) => handleNavigation(e, "#benefits")}
                >
                  Avantages
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 link-hover"
                >
                  Tarifs
                </a>
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
              Entreprise
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 link-hover"
                >
                  À propos
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 link-hover"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 link-hover"
                >
                  Confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 link-hover"
                >
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@iwalink.ch"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 link-hover truncate"
                >
                  info@iwalink.ch
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                <a
                  href="tel:+41223000000"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 link-hover"
                >
                  +41 22 362 04 04
                </a>
              </li>
              <li className="mt-4">
                <div className="flex items-center bg-blue-50 rounded-lg p-3 border border-blue-100 hover:shadow-md transition-all duration-300 hover:border-blue-200">
                  <Trophy className="h-5 w-5 text-iwa-blue mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-iwa-blue mb-1">
                      Sponsor officiel
                    </div>
                    <a
                      href="https://www.lucfootball.ch/"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center text-sm group"
                    >
                      <span className="truncate">
                        AF Luc-Dorigny football Club EPFL UNIL
                      </span>
                      <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-gray-100 mt-8 pt-6 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="0"
        >
          <div className="text-xs md:text-sm text-muted-foreground text-center">
            &copy; {currentYear} IWALINK. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
