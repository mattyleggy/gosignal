import HomeHeader from "../../../components/hero/home-hero";
import BackgroundGradient from "@/components/header/background-gradient";
import KeyFeatures from "../../../components/sections/key-features";
import { ReasonsToChooseUs } from "../../../components/sections/reasons-to-choose-us";
import { PricingSection } from "../../../components/sections/pricing-section";
import { PricingPlans } from "../../../components/sections/pricing-plans";
import StandOut from "../../../components/sections/stand-out";
import WhoAreWe from "../../../components/sections/who-are-we";
import FAQ from "../../../components/sections/faq";
import { CaseStudies } from "@/components/sections/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Aussie Websites for Businesses, Tradies & Health Professionals | Go Signal",
    description: "Transform your business with a custom website from Go Signal. Specializing in websites for tradies, health professionals, and small businesses in Australia.",
    openGraph: {
        title: "Custom Aussie Websites for Businesses, Tradies & Health Professionals | Go Signal",
        description: "Transform your business with a custom website from Go Signal. Specializing in websites for tradies, health professionals, and small businesses in Australia.",
        images: [
            {
                url: '/images/hero-man.png',
                width: 1000,
                height: 929,
                alt: 'Go Signal - Web Development Agency',
            },
        ],
    },
};

export default function Home() {
    return (
        <>
            <BackgroundGradient />
            <HomeHeader />
            <KeyFeatures />
            <ReasonsToChooseUs />
            <PricingSection />
            <CaseStudies />
            <PricingPlans />
            <StandOut />
            <WhoAreWe />
            <FAQ />
        </>
    );
}
