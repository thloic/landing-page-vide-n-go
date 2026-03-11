"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const COOKIE_KEY = "vide-n-go-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Delay slightly so it doesn't flash during hydration
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Consentement aux cookies"
          className="fixed bottom-4 left-4 right-4 z-[100] max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                🍪 Nous utilisons des cookies pour améliorer votre expérience.
                En continuant, vous acceptez notre{" "}
                <Link
                  href="/cookies"
                  className="underline text-[#30808E] hover:text-[#256870] transition-colors"
                >
                  politique des cookies
                </Link>
                .
              </p>
              <button
                onClick={decline}
                aria-label="Fermer"
                className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={accept}
                className="bg-[#30808E] text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-[#256870] transition-colors shadow-sm"
              >
                Accepter
              </button>
              <button
                onClick={decline}
                className="bg-gray-100 text-gray-700 text-sm font-medium px-5 py-2 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Refuser
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
