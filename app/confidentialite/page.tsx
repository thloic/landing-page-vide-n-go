/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ArrowLeft, Shield, Database, Clock, Users, Lock, Cookie, FileText, Bell } from 'lucide-react';

export default function Confidentialite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header avec gradient */}
      <div className="bg-gradient-to-r from-[#30808E] to-[#4A9AA8] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l&apos;accueil
          </a>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Politique de Confidentialité
          </h1>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="space-y-8">
          
          {/* Section 1 : Responsable de traitement */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">1. Responsable de traitement</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Vide and Go est éditée par <span className="font-semibold">RENT UP</span>, dont le siège social est situé à 
                35 rue Gustave Delory 59000 Lille, immatriculée au RCS de Lille sous le numéro 878419043.
              </p>
            </div>
          </section>

          {/* Section 2 : Données collectées */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">2. Données collectées</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-3">
              <p>L&apos;application collecte les données suivantes, selon l&apos;usage :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informations d&apos;identification (nom, prénom, entreprise, fonction, email, téléphone)</li>
                <li>Informations de connexion (identifiants, logs)</li>
                <li>Coordonnées de paiement</li>
                <li>Localisation lors des collectes (via GPS, avec accord explicite)</li>
                <li>Historique des commandes et factures</li>
                <li>Éventuels échanges via messagerie interne</li>
              </ul>
            </div>
          </section>

          {/* Section 3 : Finalités de la collecte */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">3. Finalités de la collecte</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-3">
              <p>Les données sont utilisées pour :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Création et gestion des comptes utilisateurs</li>
                <li>Planification et exécution des collectes</li>
                <li>Suivi des paiements et facturation</li>
                <li>Communication avec les utilisateurs (notifications, emails)</li>
                <li>Amélioration des services (statistiques, support client)</li>
                <li>Sécurité et prévention de la fraude</li>
              </ul>
            </div>
          </section>

          {/* Section 4 : Durée de conservation */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">4. Durée de conservation</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Les données sont conservées pendant la durée d&apos;utilisation du service, prolongée des délais légaux 
                de prescription applicables (comptabilité, litiges, etc.). Les données peuvent être supprimées sur 
                demande, sauf obligation légale de conservation.
              </p>
            </div>
          </section>

          {/* Section 5 : Destinataires */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">5. Destinataires</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Seuls les personnels habilités de Vide and Go et les prestataires techniques (hébergeur, solutions 
                de paiement, sous-traitants informatiques) ont accès aux données, dans la limite nécessaire à leur 
                mission. Les données ne sont pas cédées à des tiers hors UE sans votre consentement.
              </p>
            </div>
          </section>

          {/* Section 6 : Droits des utilisateurs */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">6. Droits des utilisateurs</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-3">
              <p>
                Chaque utilisateur dispose d&apos;un droit d&apos;accès, de rectification, d&apos;opposition, d&apos;effacement 
                et de portabilité sur ses données (articles 15 à 22 RGPD), en adressant une demande à :{' '}
                <a href="mailto:contact@vide-and-go.com" className="text-[#30808E] hover:underline font-semibold">
                  contact@vide-and-go.com
                </a>
              </p>
              <p>
                Vous pouvez également introduire une réclamation auprès de la CNIL :{' '}
                <a 
                  href="https://www.cnil.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#30808E] hover:underline font-semibold"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>
          </section>

          {/* Section 7 : Sécurité */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">7. Sécurité</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Vide and Go prend toutes les mesures nécessaires pour assurer la sécurité et la confidentialité 
                des données (contrôle d&apos;accès, chiffrement, sauvegardes, audits).
              </p>
            </div>
          </section>

          {/* Section 8 : Cookies et traceurs */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">8. Cookies et traceurs</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                Des cookies ou traceurs peuvent être utilisés, avec information et consentement préalable de 
                l&apos;utilisateur, pour des finalités de navigation, statistiques ou techniques.
              </p>
            </div>
          </section>

          {/* Section 9 : Modifications */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#30808E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-[#30808E]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">9. Modifications</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16">
              <p>
                La présente politique de confidentialité peut être mise à jour à tout moment. En cas de 
                modification, une notification sera réalisée via l&apos;application.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}