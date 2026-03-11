import { BackgroundImage } from "./_components/background-image";
import { Navbar } from "./_components/navbar";
import CookieBanner from "./_components/cookie-banner";

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
            <main className="relative z-10">
                {children}
            </main>
            <CookieBanner />
        </div>
    )
};

export default LandingLayout;