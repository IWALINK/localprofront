import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "virtual-connector-pro";
    const description = "IWALINK fournit un service Local Pro qui est spécialement conçu pour les entreprises : un secrétaire IA personnalisé, capable de prendre en charge tous vos besoins de communication.";

    // Set the appropriate title based on the current route
    if (location.pathname === "/") {
      title = "Accueil - Local Pro CH";
    } else if (location.pathname === "/about") {
      title = "A Propos - Local Pro CH";
    }

    // Update the document title
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [location]);

  // This is a utility component that doesn't render anything
  return null;
};

export default PageTitle;
