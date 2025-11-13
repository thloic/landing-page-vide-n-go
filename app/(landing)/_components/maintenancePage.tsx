'use client';

import { motion } from 'framer-motion';
import { Wrench, Mail, Bell } from 'lucide-react';
import { useState } from 'react';

const MaintenancePage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter l'intégration avec votre service d'emailing
    console.log('Email soumis:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6841DA] via-[#8B5CF6] to-[#6841DA] flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icône animée */}
          <motion.div
            className="w-20 h-20 md:w-24 md:h-24 bg-[#6841DA] rounded-full flex items-center justify-center mx-auto mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Wrench className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </motion.div>

          {/* Logo et titre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Vide n go
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#6841DA] mb-4">
              En cours de développement
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Nous travaillons dur pour vous offrir la meilleure expérience de recyclage. 
              Notre application sera bientôt disponible !
            </p>
          </motion.div>

          {/* Formulaire de notification */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-gray-700 font-medium mb-4 flex items-center justify-center gap-2">
              <Bell className="w-5 h-5 text-[#6841DA]" />
              Soyez informé du lancement
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#6841DA] focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#6841DA] hover:bg-[#5a38bb] text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Me notifier
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-3 rounded-xl font-medium max-w-md mx-auto"
              >
                ✓ Merci ! Nous vous tiendrons informé.
              </motion.div>
            )}
          </motion.div>

          {/* Réseaux sociaux (à venir) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="pt-6 border-t border-gray-200"
          >
            <p className="text-gray-500 text-sm mb-4">Suivez-nous bientôt sur nos réseaux sociaux</p>
            <div className="flex justify-center gap-4">
              {/* Placeholder pour les icônes des réseaux sociaux */}
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center opacity-50">
                <span className="text-xs font-bold text-gray-400">FB</span>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center opacity-50">
                <span className="text-xs font-bold text-gray-400">IG</span>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center opacity-50">
                <span className="text-xs font-bold text-gray-400">X</span>
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center opacity-50">
                <span className="text-xs font-bold text-gray-400">LI</span>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.p
            className="text-gray-400 text-sm mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            © 2024 Vide n go. Tous droits réservés.
          </motion.p>
        </motion.div>

        {/* Texte sous la carte */}
        <motion.p
          className="text-white text-center mt-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          Pour toute question : <a href="mailto:contact@videngo.com" className="underline font-semibold">contact@videngo.com</a>
        </motion.p>
      </div>
    </div>
  );
};

export default MaintenancePage;