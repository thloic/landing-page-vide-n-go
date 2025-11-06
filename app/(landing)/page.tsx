import Fonctionnalites from "./_components/fonctionnalite"; // Importation du composant Fonctionnalites
import Footer from "./_components/footer"; // Importation du composant Footer
import Hero from "./_sections/hero";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Contenu principal de la page, géré par le layout */}
      <Hero />
      <Fonctionnalites />
      {/* Ajouter une section Témoignages si vous en avez une */}
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default LandingPage;