'use client';

import { motion, Variants } from 'framer-motion';
import { Smartphone, Search, Truck, Clock, Globe, MessageCircle, Lightbulb, Apple, Download } from 'lucide-react';
import Image from 'next/image';

export default function Fonctionnalites() {
  const sectionTitleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const featureIconVariants: Variants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } }
  };

  const downloadButtonVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
    hover: { scale: 1.05, y: -5, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {/* SECTION 1 : Comment ça marche */}
      <section id="fonctionnalites" className="py-16 md:py-20 lg:py-28 px-4 md:px-6 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-12 md:mb-16 lg:mb-20 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionTitleVariants}
          >
            Comment ça <span className="text-[#6841DA]">marche</span> ?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: Smartphone,
                title: 'Décrivez votre objet',
                description: 'Prenez une photo et précisez ce que vous souhaitez recycler.',
              },
              {
                icon: Search,
                title: 'Trouvez un recycleur',
                description: "L'application vous connecte automatiquement à des recycleurs agréés.",
              },
              {
                icon: Truck,
                title: "Collecte ou dépôt",
                description: "C'est simple, rapide et écoresponsable !",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col items-center text-center group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 bg-[#6841DA] rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-lg"
                  variants={featureIconVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <step.icon className="text-white w-8 h-8 md:w-10 md:h-10" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-snug">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 : Pourquoi choisir Vide N Go */}
      <section className="py-16 md:py-20 lg:py-28 px-4 md:px-6 bg-white overflow-hidden"  id='pourquoi'>
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-12 md:mb-16 lg:mb-20 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionTitleVariants}
          >
            Pourquoi choisir <span className="text-[#6841DA]">Vide N go</span> ?
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {[
              {
                icon: Clock,
                title: 'Gain de temps',
                description: 'Recyclage en quelques clics',
              },
              {
                icon: Globe,
                title: 'Impact positif',
                description: 'Agissez pour la planète',
              },
              {
                icon: MessageCircle,
                title: 'Simplicité totale',
                description: 'Interface intuitive',
              },
              {
                icon: Lightbulb,
                title: 'Transparence',
                description: 'Suivez votre impact',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4 md:space-y-5 p-6 md:p-8 rounded-2xl transition-all border border-transparent hover:border-gray-100 hover:bg-[#F8FAFC] group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-16 h-16 md:w-18 md:h-18 bg-[#6841DA] rounded-full flex items-center justify-center mx-auto shadow-md"
                  variants={featureIconVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <feature.icon className="text-white w-8 h-8 md:w-9 md:h-9" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : Téléchargement */}
      <section id="telecharger" className="py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-[#6841DA] overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto text-center space-y-8 md:space-y-10 relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white px-4 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionTitleVariants}
          >
            Rejoignez le mouvement du recyclage <span className="text-[#FFF8A6]">intelligent</span> !
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-white/90 px-4 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: 0.3 }}
          >
            Téléchargez Vide N go et donnez une nouvelle vie à vos objets.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 pt-6 md:pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#"
              className="bg-white text-gray-900 px-7 md:px-9 py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl mx-auto sm:mx-0 min-w-[200px]"
              variants={downloadButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Apple className="w-6 h-6 md:w-7 md:h-7" />
              <div className="text-left">
                <div className="text-xs text-gray-600">Télécharger sur</div>
                <div className="text-lg md:text-xl font-semibold">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              className="bg-white text-gray-900 px-7 md:px-9 py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl mx-auto sm:mx-0 min-w-[200px]"
              variants={downloadButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Download className="w-6 h-6 md:w-7 md:h-7" />
              <div className="text-left">
                <div className="text-xs text-gray-600">Disponible sur</div>
                <div className="text-lg md:text-xl font-semibold">Google Play</div>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative phone image for the download section */}
        <div className="absolute bottom-0 right-0 opacity-20 hidden md:block">
          <Image
            src="/mockupvidengo.png"
            alt="Phone Mockup"
            width={400}
            height={400}
            className="translate-x-1/4 translate-y-1/4"
            style={{ filter: 'grayscale(100%) brightness(150%)' }}
          />
        </div>
      </section>
    </>
  );
}