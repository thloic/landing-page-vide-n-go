'use client';

import { motion, Variants, useReducedMotion } from 'framer-motion';
import { Smartphone, Search, Truck, Clock, Globe, MessageCircle, Lightbulb, Apple } from 'lucide-react';

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76c.37.21.8.23 1.19.06L16.93 12 13.06 8.13 3.18 23.76zm16.09-12.39a1.4 1.4 0 0 0 0-2.74L17.05 7.5l-4.22 4.22 4.22 4.22 2.22-1.13a1.39 1.39 0 0 0 0 0zM1.02 1.6A1.4 1.4 0 0 0 .75 2.32v19.36c0 .27.09.53.27.72l.09.08 10.83-10.82v-.25L1.11 1.52l-.09.08zm12.04 10.65L5.39 20.92 4.37 22l-.01-.01L15.8 13.53l-2.74-1.28z" />
  </svg>
);
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Fonctionnalites() {
  const shouldReduceMotion = useReducedMotion();

  // Detect touch/mobile device (hover: none = touchscreen)
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches);
  }, []);

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

  // Desktop hover: lift + teal glow
  const hoverDesktop = shouldReduceMotion ? {} : {
    y: -10,
    boxShadow: '0px 24px 48px rgba(48,128,142,0.18)',
    borderColor: '#30808E',
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
  };

  // Mobile sticky press: scale down with bouncy spring — feels "glued" under finger
  const tapMobile = shouldReduceMotion ? {} : {
    scale: 0.93,
    boxShadow: '0px 4px 12px rgba(48,128,142,0.25)',
    transition: { type: 'spring' as const, stiffness: 400, damping: 10 },
  };

  // Unified card interactions
  const cardInteraction = {
    whileHover: isTouch ? {} : hoverDesktop,
    whileTap: tapMobile,
  };

  // Feature card (small) hover
  const featureHoverDesktop = shouldReduceMotion ? {} : {
    y: -8,
    scale: 1.04,
    boxShadow: '0px 16px 32px rgba(48,128,142,0.14)',
    backgroundColor: '#f0fafb',
    borderColor: '#30808E',
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
  };

  const featureInteraction = {
    whileHover: isTouch ? {} : featureHoverDesktop,
    whileTap: tapMobile,
  };

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
      <section id="fonctionnalites" aria-label="Comment ça marche" className="py-16 md:py-20 lg:py-28 px-4 md:px-6 bg-[#F8FAFC] overflow-hidden">
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
                  className="bg-white rounded-3xl p-5 md:p-7 shadow-xl border border-gray-100 flex flex-col items-center text-center cursor-pointer"
                  variants={cardVariants}
                  {...cardInteraction}
                  style={{ borderWidth: 2 }}
                >
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 bg-[#30808E] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md"
                    initial={{ scale: 1 }}
                    animate={!shouldReduceMotion ? { y: [0, -6, 0] } : undefined}
                    transition={!shouldReduceMotion ? {
                      duration: 2.2,
                      repeat: Infinity,
                      repeatType: "loop" as const,
                      ease: "easeInOut" as any,
                    } : undefined}
                    whileHover={!shouldReduceMotion && !isTouch ? { scale: 1.15, rotate: 8 } : {}}
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
      <section aria-label="Pourquoi nous choisir" className="py-16 md:py-20 lg:py-28 px-4 md:px-6 bg-white overflow-hidden" id='pourquoi'>
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
                  className="text-center space-y-3 p-5 md:p-6 rounded-2xl border border-transparent cursor-pointer"
                  style={{ borderWidth: 2 }}
                  variants={cardVariants}
                  {...featureInteraction}
                >
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 bg-[#30808E] rounded-full flex items-center justify-center mx-auto shadow-sm"
                    animate={!shouldReduceMotion ? { rotate: [0, 6, 0] as any } : undefined}
                    transition={!shouldReduceMotion ? { duration: 2.5, repeat: Infinity } : undefined}
                    whileHover={!shouldReduceMotion && !isTouch ? { scale: 1.2, rotate: 0 } : {}}
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
      <section id="telecharger" aria-label="Télécharger l'application" className="py-20 md:py-28 lg:py-36 px-4 md:px-6 bg-[#30808E] overflow-hidden relative">
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
              href="https://apps.apple.com/bj/app/vide-n-go-d%C3%A9barras-pro/id6757605801"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://play.google.com/store/apps/details?id=com.videngo.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-3.5 rounded-xl flex items-center gap-3 shadow-md min-w-[200px] justify-center"
              whileHover={!shouldReduceMotion ? { scale: 1.02, y: -4 } : {}}
              whileTap={{ scale: 0.98 }}
            >
              <GooglePlayIcon />
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
