import { BackgroundImage } from "./_components/background-image";
import { Navbar } from "./_components/navbar";

interface LandingLayoutProps {
    children: React.ReactNode;
}

const LandingLayout = ({
    children,
}: LandingLayoutProps) => {
    return (
        <div className="relative min-h-screen bg-gray-50"> {/* Ajout d'une couleur de fond par défaut */}
            <BackgroundImage />
            <Navbar />
            <main className="relative z-10"> {/* Assure que le contenu est au-dessus de l'image de fond */}
                {children}
            </main>
        </div>
    )
};

export default LandingLayout;