'use client';

import { Smartphone, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#F8FAFC] to-[#EFF6F8] text-gray-700 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-12 md:py-16">
        
        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
          
          {/* Colonne 1: À propos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 bg-[#30808E] rounded-full flex items-center justify-center shadow-md"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Smartphone className="text-white w-6 h-6" />
              </motion.div>
              <span className="text-xl font-bold text-[#30808E] tracking-wide">
                Vide N go
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              La plateforme vide-n-go en ligne qui simplifie le recyclage des objets d&apos;occasion entre particuliers ou entreprise.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: Facebook, href: '/maintenance', label: 'Facebook' },
                { icon: Twitter, href: '/maintenance', label: 'Twitter' },
                { icon: Instagram, href: '/maintenance', label: 'Instagram' },
                { icon: Linkedin, href: '/maintenance', label: 'LinkedIn' },
              ].map((social, index) => (
                <motion.div key={index}>
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#30808E] hover:text-white hover:border-[#30808E] transition-all duration-300 shadow-sm"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Colonne 2: Navigation rapide */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-[#30808E] inline-block">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Comment ça marche', href: '#fonctionnalites' },
                { label: 'Fonctionnalité', href: '#fonctionnalites' },
                { label: 'Pourquoi-nous?', href: '#pourquoi' },
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#30808E] hover:pl-2 transition-all duration-200 inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Informations légales */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-[#30808E] inline-block">
              Légal
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Mentions légales', href: '/mentions-legal' },
                { label: 'CGU / CGV', href: '/cgu-cgv' },
                { label: 'Politique de confidentialité', href: '/confidentialite' },
                { label: 'Politique des cookies', href: '/cookies' },
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#30808E] hover:pl-2 transition-all duration-200 inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4: Contact */}
           <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4 pb-2 border-b-2 border-[#30808E] inline-block">
              Nous contacter
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Cliquer ici', href: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#30808E] hover:pl-2 transition-all duration-200 inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-600 text-center md:text-left">
              © {currentYear}{' '}
              <span className="font-semibold text-[#30808E]">Vide N go</span>. 
              Tous droits réservés.
            </p>

            {/* Badges de paiement / certification (optionnel) */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">Paiement sécurisé</span>
              <div className="flex gap-2">
                <div className="w-10 h-7 bg-white rounded border border-gray-200 flex items-center justify-center text-[9px] font-bold text-gray-600 shadow-sm">
                  Stripe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}