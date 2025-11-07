'use client';

import { motion, Variants, useReducedMotion } from 'framer-motion';
import { Smartphone, Search, Truck, Clock, Globe, MessageCircle, Lightbulb, Apple, Download } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Fonctionnalites() {
  const shouldReduceMotion = useReducedMotion();

  // Container variants with staggering
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      }
    }
  };

  // Section title
  const sectionTitleVariants: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.65, ease: 'easeOut' }
    }
  };

  // Card animation (entry)
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } }
  };

  // Icon auto "bob" animation for non-reduced-motion
  const iconBob = shouldReduceMotion ? {} : {
    animate: { y: [0, -6, 0] as any },
    transition: { duration: 2.2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }
  };

  // Touch-friendly micro interactions
  const tapInteraction = { whileTap: { scale: 0.97 }, whileHover: shouldReduceMotion ? {} : { y: -6 } };

  const steps = [
    { icon: Smartphone, title: 'Décrivez votre objet', description: 'Prenez une photo et précisez ce que vous souhaitez recycler.' },
    { icon: Search, title: 'Trouvez un recycleur', description: "L'application vous connecte automatiquement à des recycleurs agréés." },
    { icon: Truck, title: "Collecte ou dépôt", description: "C'est simple, rapide et écoresponsable !" },
  ];

  const features = [
    { icon: Clock, title: 'Gain de temps', description: 'Recyclage en quelques clics' },
    { icon: Globe, title: 'Impact positif', description: 'Agissez pour la planète' },
    { icon: MessageCircle, title: 'Simplicité totale', description: 'Interface intuitive' },
    { icon: Lightbulb, title: 'Transparence', description: 'Suivez votre impact' },
  ];

  return (
    <>
      {/* SECTION 1 */}
      <section id="fonctionnalites" className="py-16 md:py-20 lg:py-28 px-4 md:px-6 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-12 md:mb-16 lg:mb-20 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={sectionTitleVariants}
          >
            Comment ça <span className="text-[#30808E]">marche</span> ?
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={idx}
                  className="bg-white rounded-3xl p-5 md:p-7 shadow-xl border border-gray-100 flex flex-col items-center text-center group"
                  variants={cardVariants}
                  {...tapInteraction}
                >
                 <motion.div
  className="w-14 h-14 md:w-18 md:h-18 bg-[#30808E] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md"
  initial={{ scale: 1 }}
  animate={!shouldReduceMotion ? { y: [0, -6, 0] } : undefined}
  transition={!shouldReduceMotion ? {
    duration: 2.2,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut" as any
  } : undefined}
  aria-hidden
>
  <Icon className="text-white w-6 h-6 md:w-7 md:h-7" />
</motion.div>


                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-snug">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-[18rem]">{step.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-16 md:py-20 lg:py-28 px-4 md:px-6 bg-white overflow-hidden" id='pourquoi'>
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-12 md:mb-16 lg:mb-20 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={sectionTitleVariants}
          >
            Pourquoi choisir <span className="text-[#30808E]">Vide N go</span> ?
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={containerVariants}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center space-y-3 p-5 md:p-6 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-[#F8FAFC] transition-all"
                  variants={cardVariants}
                  {...tapInteraction}
                >
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 bg-[#30808E] rounded-full flex items-center justify-center mx-auto shadow-sm"
                    {...(shouldReduceMotion ? {} : { animate: { rotate: [0, 6, 0] as any }, transition: { duration: 2.5, repeat: Infinity } })}
                    aria-hidden
                  >
                    <Icon className="text-white w-6 h-6 md:w-7 md:h-7" />
                  </motion.div>
                  <h3 className="text-md md:text-lg font-bold text-gray-900">{f.title}</h3>
                  <p className="text-sm text-gray-600">{f.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="telecharger" className="py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-[#30808E] overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto text-center space-y-6 md:space-y-8 relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white px-4 leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionTitleVariants}
          >
            Rejoignez le mouvement du recyclage <span className="text-[#FFF8A6]">intelligent</span> !
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-white/90 px-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Téléchargez Vide N go et donnez une nouvelle vie à vos objets.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-5 pt-4 md:pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-3.5 rounded-xl flex items-center gap-3 shadow-md min-w-[200px] justify-center"
              whileHover={!shouldReduceMotion ? { scale: 1.02, y: -4 } : {}}
              whileTap={{ scale: 0.98 }}
            >
              <Apple className="w-5 h-5 md:w-6 md:h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-600">Télécharger sur</div>
                <div className="text-sm md:text-base font-semibold">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-3.5 rounded-xl flex items-center gap-3 shadow-md min-w-[200px] justify-center"
              whileHover={!shouldReduceMotion ? { scale: 1.02, y: -4 } : {}}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5 md:w-6 md:h-6" />
              <div className="text-left">
                <div className="text-xs text-gray-600">Disponible sur</div>
                <div className="text-sm md:text-base font-semibold">Google Play</div>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative phone image */}
        <div className="absolute bottom-0 right-0 opacity-18 hidden md:block pointer-events-none">
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.18 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Image
              src="/mockupvidengo.png"
              alt="Phone Mockup"
              width={420}
              height={420}
              className="translate-x-12 translate-y-12"
              style={{ filter: 'grayscale(100%) brightness(150%)' }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
