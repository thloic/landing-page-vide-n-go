import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vide N go — Recyclage simplifié, tout depuis votre téléphone",
  description:
    "Vide N go est l'application mobile qui simplifie le recyclage de vos objets d'occasion. Déposez, recyclez, agissez pour la planète — disponible sur App Store et Google Play.",
  metadataBase: new URL("https://videngo.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vide N go — Recyclage simplifié",
    description:
      "Simplifiez le recyclage, gagnez du temps et agissez pour la planète — tout depuis votre téléphone.",
    url: "https://videngo.app",
    siteName: "Vide N go",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/mockupvidengo.png",
        width: 700,
        height: 500,
        alt: "Vide N go application mobile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vide N go — Recyclage simplifié",
    description:
      "Simplifiez le recyclage, gagnez du temps et agissez pour la planète — tout depuis votre téléphone.",
    images: ["/mockupvidengo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
