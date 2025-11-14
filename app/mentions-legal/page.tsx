import React from 'react';
import { ArrowLeft, Building2, Server, Shield, Cookie, Scale, Mail } from 'lucide-react';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header avec gradient */}
      <div className="bg-gradient-to-r from-[#6841DA] to-[#8B5CF6] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </a>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Mentions Légales
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Dernière mise à jour : 15 novembre 2024
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="space-y-8">
          
          {/* Section 1 : Éditeur */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#6841DA]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-[#6841DA]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Éditeur de l'application</h2>
              </div>
            </div>
            <div className="space-y-3 text-gray-700 ml-16">
              <p><span className="font-semibold text-gray-900">Dénomination sociale :</span> RENT UP</p>
              <p><span className="font-semibold text-gray-900">Forme juridique :</span> SAS au capital social de 1 000 euros</p>
              <p><span className="font-semibold text-gray-900">Siège social :</span> 35B rue Gustave Delory, 59000 Lille</p>
              <p><span className="font-semibold text-gray-900">Numéro d'immatriculation :</span> 878 419 043</p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6841DA]" />
                <a href="mailto:contact@vide-and-go.com" className="text-[#6841DA] hover:underline font-medium">
                  contact@vide-and-go.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 2 : Hébergement */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#6841DA]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Server className="w-6 h-6 text-[#6841DA]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Hébergement</h2>
              </div>
            </div>
            <div className="space-y-3 text-gray-700 ml-16">
              <p><span className="font-semibold text-gray-900">Hébergeur :</span> HOSTINGER INTERNATIONAL LTD</p>
              <p><span className="font-semibold text-gray-900">Adresse :</span> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
              <p>
                <span className="font-semibold text-gray-900">Contact :</span>{' '}
                <a 
                  href="https://www.hostinger.fr/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#6841DA] hover:underline font-medium"
                >
                  www.hostinger.fr/contact
                </a>
              </p>
            </div>
          </section>

          {/* Section 3 : Propriété intellectuelle */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#6841DA]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#6841DA]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Propriété intellectuelle</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                L'ensemble des contenus (textes, images, logos, marque, algorithme, conception, etc.) 
                de l'application est protégé par le droit d'auteur et la propriété intellectuelle. 
                Toute reproduction ou représentation totale ou partielle sans autorisation écrite est interdite.
              </p>
            </div>
          </section>

          {/* Section 4 : Données personnelles */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#6841DA]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#6841DA]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Gestion des données personnelles</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Les informations collectées via l'application sont traitées conformément à la 
                politique de confidentialité et aux obligations RGPD : droits d'accès, de rectification 
                et d'opposition.
              </p>
              <p className="mt-3">
                Voir la politique complète en rubrique{' '}
                <a href="/confidentialite" className="text-[#6841DA] hover:underline font-semibold">
                  "Politique de Confidentialité"
                </a>.
              </p>
            </div>
          </section>

          {/* Section 5 : Conditions d'utilisation */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#6841DA]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-[#6841DA]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Conditions d'utilisation</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                L'utilisation de l'application implique l'acceptation sans réserve des CGU disponibles 
                sur l'application. En cas de services payants, les CGV sont également accessibles avant 
                tout engagement.
              </p>
            </div>
          </section>

          {/* Section 6 : Cookies */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#6841DA]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-[#6841DA]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Cookies et Traceurs</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                L'application peut utiliser des cookies ou traceurs à des fins statistiques et de bon 
                fonctionnement. Chaque utilisateur peut gérer ses préférences dans les réglages.
              </p>
              <p className="mt-3">
                Pour plus d'informations, consultez notre{' '}
                <a href="/cookies" className="text-[#6841DA] hover:underline font-semibold">
                  Politique des Cookies
                </a>.
              </p>
            </div>
          </section>

          {/* Section 7 : Réclamations et litiges */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#6841DA]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#6841DA]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Réclamations et litiges</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p className="mb-3">
                Pour toute réclamation :{' '}
                <a href="mailto:contact@vide-and-go.com" className="text-[#6841DA] hover:underline font-semibold">
                  contact@vide-and-go.com
                </a>
              </p>
              <p>
                En cas de litige, la loi française est applicable et le Tribunal compétent est situé 
                au 35 rue Gustave Delory, 59000 Lille.
              </p>
            </div>
          </section>

          {/* Note de bas de page */}
          <div className="bg-gradient-to-r from-[#6841DA]/5 to-[#8B5CF6]/5 rounded-xl p-6 border border-[#6841DA]/10">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">Note importante :</span> Ces mentions légales 
              suivent les obligations légales en France pour une application mobile et doivent être adaptées 
              selon votre structure exacte. Il est recommandé de consulter un avocat ou expert juridique 
              pour toute validation définitive.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}