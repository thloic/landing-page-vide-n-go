/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';

export default function Cookies() {
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
            Retour à l&apos;accueil
          </a>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Politique des Cookies
          </h1>
          <p className="text-white/90 text-sm md:text-base">
            Dernière mise à jour : 15 novembre 2024
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="space-y-8">
          
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#6841DA]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-[#6841DA]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Utilisation des Cookies</h2>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed ml-16 space-y-4">
              <p>
                L&apos;application Vide and Go utilise des cookies et traceurs à des fins statistiques et de bon 
                fonctionnement. Chaque utilisateur peut gérer ses préférences dans les réglages de l&apos;application.
              </p>
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d&apos;un site ou 
                de l&apos;utilisation d&apos;une application. Il permet de collecter des informations relatives à votre 
                navigation et de vous proposer des services adaptés.
              </p>
              <p>
                Pour plus d&apos;informations sur vos données personnelles, consultez notre{' '}
                <a href="/confidentialite" className="text-[#6841DA] hover:underline font-semibold">
                  Politique de Confidentialité
                </a>.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}