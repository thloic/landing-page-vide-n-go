'use client';

import { Smartphone } from 'lucide-react';
import { motion } from 'framer-motion'; // Importation de Framer Motion

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] text-gray-700 border-t border-gray-100 py-8 md:py-10 lg:py-12"> {/* Couleur de fond plus douce et padding ajusté */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6"> {/* Max width ajustée */}

        {/* Partie supérieure : logo + liens */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10 border-b border-gray-200 pb-6 sm:pb-8 mb-6 sm:mb-8"> {/* Couleurs de bordure et padding ajustés */}

          {/* Logo + nom */}
          <div className="flex items-center gap-3 sm:gap-4"> {/* Gap ajusté */}
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 bg-[#30808E] rounded-full flex items-center justify-center shadow-md flex-shrink-0" 
              whileHover={{ scale: 1.1, rotate: 10 }} // Animation de hover
              transition={{ duration: 0.3 }}
            >
              <Smartphone className="text-white w-6 h-6 sm:w-7 sm:h-7" /> {/* Taille de l'icône ajustée */}
            </motion.div>
            <span className="text-xl sm:text-2xl font-bold text-[#30808E] tracking-wide"> {/* Couleur du texte ajustée */}
              Vide N go
            </span>
          </div>

          {/* Liens */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm md:text-base font-medium text-center"> {/* Gap et taille de texte ajustés */}
            {[
              { label: 'Mentions légales', href: '#' },
              { label: 'Politique de confidentialité', href: '#' },
              { label: 'Contact', href: '#' },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="relative group text-gray-600 hover:text-[#6841DA] transition-colors duration-200"
                whileHover={{ y: -2 }} // Animation de hover subtile
                transition={{ duration: 0.2 }}
              >
                {link.label}
                <motion.span
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-[#6841DA] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Partie inférieure */} 
        <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500"> {/* Margins et couleurs ajustées */}
          <p>
            © {new Date().getFullYear()}{' '} 
            <span className="font-semibold text-[#30808E]">Vide N go</span>. Tous droits réservés. {/* Couleur du texte ajustée */}
          </p>
        </div>
      </div>
    </footer>
  );
}