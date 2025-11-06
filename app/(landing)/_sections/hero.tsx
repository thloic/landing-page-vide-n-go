"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="w-full flex items-center min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-100px)] px-4 md:px-6 lg:px-8 relative overflow-hidden">
            <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-16 lg:gap-20 py-12 md:py-16 lg:pt-20 lg:pb-12">
                <HeroLeft />
                <HeroRight />
            </div>
        </section>
    );
};

const HeroLeft = () => {
    const textVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const buttonVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
        hover: { scale: 1.03 },
        tap: { scale: 0.97 },
    };

    const badgeVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="flex flex-col justify-center space-y-8 md:space-y-10 lg:space-y-12 w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-4 md:space-y-6 select-none"
            >
                <motion.h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.1] text-gray-900">
                    Recyclez <br />facilement avec <br /> <span className="text-[#6841DA]">Vide n go</span>
                </motion.h1>
                <motion.p className="font-light text-base sm:text-lg md:text-xl max-w-md lg:max-w-lg mx-auto lg:mx-0 text-gray-700">
                    Simplifiez le recyclage, gagnez du temps et agissez pour la planète — tout depuis votre téléphone.
                </motion.p>
            </motion.div>

            <motion.div
                className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center lg:justify-start"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                <Link href="#fonctionnalites">
                    <Button
                        variant={"secondary"}
                        size={"lg"}
                        className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        En savoir plus
                    </Button>
                </Link>
                <Link href="#telecharger">
                    <Button
                        variant={"primary"}
                        size={"lg"}
                        className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        Télécharger l&apos;app
                    </Button>
                </Link>
            </motion.div>

            <HeroDL badgeVariants={badgeVariants} />
        </div>
    );
};

interface HeroDLProps {
    badgeVariants: Variants;
}

const HeroDL = ({ badgeVariants }: HeroDLProps) => {
    return (
        <div className="flex flex-col space-y-5 items-center lg:items-start pt-4 md:pt-6">
            <motion.div
                className="flex items-center space-x-3"
                initial="hidden"
                animate="visible"
                variants={badgeVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Image
                    src={"/star.svg"}
                    alt="Star rating"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                />
                <span className="text-base text-gray-600 font-medium">4.8/5 (2.5k avis)</span>
            </motion.div>
            <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto"
                initial="hidden"
                animate="visible"
                variants={badgeVariants}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
                <Link href="/" className="cursor-pointer flex justify-center group">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                        <Image
                            src={"/appstore-badge.svg"}
                            alt="AppStore Badge"
                            width={140}
                            height={50}
                            className="w-[120px] sm:w-[140px] h-auto"
                        />
                    </motion.div>
                </Link>
                <Link href="/" className="cursor-pointer flex justify-center group">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                        <Image
                            src={"/googleplay-badge.svg"}
                            alt="Google Play Badge"
                            width={140}
                            height={50}
                            className="w-[120px] sm:w-[140px] h-auto"
                        />
                    </motion.div>
                </Link>
            </motion.div>
        </div>
    );
};

const HeroRight = () => {
    const imageVariants: Variants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
            <Image
                alt="Mockup Vide n go"
                src={"/mockupvidengo.png"}
                width={700}
                height={500}
                priority
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto object-contain"
            />
            <motion.div
                className="absolute top-1/4 left-0 w-24 h-24 bg-[#FFF8A6] rounded-full mix-blend-multiply opacity-50 blur-xl hidden md:block"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-0 w-32 h-32 bg-[#6841DA] rounded-full mix-blend-multiply opacity-40 blur-xl hidden md:block"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            />
        </motion.div>
    );
};

export default Hero;