import WhoAreWe from "@/components/sections/who-are-we";
import OurProcess from "@/components/sections/our-process";
import OurValues from "@/components/sections/our-values";
import AboutHero from "@/components/hero/about-hero";
import BackgroundGradient from "@/components/header/background-gradient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Go Signal | Brisbane's Trusted Web Development Agency",
    description: "Meet Go Signal, Brisbane's leading web development agency. We specialize in creating custom websites for Australian businesses, with a focus on tradies and health professionals.",
    openGraph: {
        title: "About Go Signal | Brisbane's Trusted Web Development Agency",
        description: "Meet Go Signal, Brisbane's leading web development agency. We specialize in creating custom websites for Australian businesses, with a focus on tradies and health professionals.",
        images: [
            {
                url: '/images/hero-man.png',
                width: 1000,
                height: 929,
                alt: 'About Go Signal Web Development Agency',
            },
        ],
    },
};

export default function AboutPage() {
    return (
        <>
            <BackgroundGradient />
            <AboutHero />
            <OurValues />            
            <WhoAreWe />            
            <OurProcess />
        </>
    );
}
