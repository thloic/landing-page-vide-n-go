"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const navigation = [
  { item: "Home", href: "#" },
  { item: "Fonctionnalités", href: "#fonctionnalites" },
  { item: "Pourquoi-nous choisir?", href: "#pourquoi" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Mobile / Tablet */}
        <div className="flex lg:hidden items-center justify-between h-[60px]">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="w-8 h-8 md:w-10 md:h-10" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Vide n go</h2>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-[#30808E] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden absolute top-[60px] left-0 w-full bg-white shadow-lg rounded-b-lg overflow-hidden border-t border-gray-100"
            >
              <nav className="flex flex-col py-4 px-4 space-y-3">
                {navigation.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-lg font-medium text-gray-800 hover:text-[#30808E] transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.item}
                  </Link>
                ))}
                <Link href="/" onClick={() => setIsOpen(false)} className="mt-4 pt-4 border-t border-gray-100">
                  <Button variant="primary" size="lg" className="w-full">
                    Télécharger
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop */}
        <nav className="hidden lg:flex justify-between items-center h-[70px] bg-white/80 backdrop-blur-sm rounded-xl px-6 shadow-sm border border-gray-100 mt-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="w-10 h-10" />
            <h2 className="text-2xl font-bold text-gray-900">Vide n go</h2>
          </Link>

          {/* Liens */}
          <div className="flex space-x-10 text-base font-medium text-gray-700">
            {navigation.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="relative group py-2"
              >
                {link.item}
                <motion.span
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-[#30808E] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Bouton */}
          <Link href="/">
            <Button variant="primary" size="lg" className="shadow-md hover:shadow-lg transition-shadow duration-300">
              Télécharger
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
