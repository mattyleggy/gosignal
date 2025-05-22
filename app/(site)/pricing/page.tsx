import { PricingSection } from "@/components/sections/pricing-section";
import { PricingPlans } from "@/components/sections/pricing-plans";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Website Pricing & Packages | Transparent Web Development Costs | Go Signal",
    description: "View our transparent website pricing and packages. We offer competitive rates for custom websites, with options for tradies, health professionals, and small businesses.",
    openGraph: {
        title: "Website Pricing & Packages | Transparent Web Development Costs | Go Signal",
        description: "View our transparent website pricing and packages. We offer competitive rates for custom websites, with options for tradies, health professionals, and small businesses.",
        images: [
            {
                url: '/images/hero-man.png',
                width: 1000,
                height: 929,
                alt: 'Go Signal Website Pricing and Packages',
            },
        ],
    },
};

export default function PricingPage() {
    return (
        <>
            <PricingSection />
            <PricingPlans />
        </>
    );
} 