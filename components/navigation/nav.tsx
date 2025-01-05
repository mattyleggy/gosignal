"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Logo } from "../common/logo";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { handleNavigation } = useScrollToSection();

    const navigationLinks = [
        {
            label: "Home",
            href: "/",
            sectionId: "home",
        },
        {
            label: "Services",
            href: "/services",
            sectionId: "services",
        },
        {
            label: "Pricing",
            href: "/pricing",
            sectionId: "pricing",
        },
        {
            label: "About Us",
            href: "/about",
            sectionId: "about",
        },
        {
            label: "Contact",
            href: "/contact",
            sectionId: "contact",
        },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex justify-between items-center max-w-7xl w-full py-10 px-4 md:px-0"
        >
            <div className="flex items-center gap-4">
                <button
                    className="lg:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className="hidden lg:block">
                <ul className="flex gap-10 items-center w-full">
                    {navigationLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
                <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-sm" />
                    <span>(07) 2115 6299</span>
                </div>
                <Button className="hidden lg:block text-sm px-4 py-2">Start For Free</Button>
            </div>
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-[5rem] left-0 right-0 bg-white shadow-lg p-4 z-50">
                    <ul className="flex flex-col gap-4">
                        {navigationLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={(e) => handleNavigation(e, link.href, link.sectionId)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-2 mt-4">
                        <Button className="text-sm px-4 py-2">Start For Free</Button>
                    </div>
                </div>
            )}
        </motion.nav>
    );
}
