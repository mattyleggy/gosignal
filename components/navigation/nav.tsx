"use client";
import { useState } from "react";
import { Logo } from "../common/logo";
import { FaPhoneAlt } from "react-icons/fa";
import StartFreeButton from "../common/start-free-button";

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <nav className="flex justify-between items-center max-w-7xl w-full py-10 px-4 md:px-0">
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
                <a href="/">
                    <Logo />
                </a>
            </div>
            <div className="hidden lg:block">
                <ul className="flex gap-10 items-center w-full">
                    {navigationLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
                <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-sm" />
                    <span>(07) 2115 6299</span>
                </div>
                <StartFreeButton />
            </div>
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-[5rem] left-0 right-0 bg-white shadow-lg p-4 z-50">
                    <ul className="flex flex-col gap-4">
                        {navigationLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-2 mt-4">
                        <StartFreeButton />
                    </div>
                </div>
            )}
        </nav>
    );
}
