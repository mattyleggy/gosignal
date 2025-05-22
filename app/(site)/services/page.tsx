import BackgroundGradient from "@/components/header/background-gradient";
import OurServices from "@/components/sections/our-services";
import ServiceFeatures from "@/components/sections/service-features";
import ServiceProcess from "@/components/sections/service-process";
import ServicesHero from "@/components/hero/services-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Development Services | Custom Websites for Australian Businesses | Go Signal",
    description: "Professional web development services tailored for Australian businesses. From custom websites to e-commerce solutions, we help tradies and health professionals establish their online presence.",
    openGraph: {
        title: "Web Development Services | Custom Websites for Australian Businesses | Go Signal",
        description: "Professional web development services tailored for Australian businesses. From custom websites to e-commerce solutions, we help tradies and health professionals establish their online presence.",
        images: [
            {
                url: '/images/hero-man.png',
                width: 1000,
                height: 929,
                alt: 'Go Signal Web Development Services',
            },
        ],
    },
};

export default function ServicesPage() {
    return (
        <>
            <BackgroundGradient />
            <ServicesHero />
            <OurServices />
            <ServiceProcess />
            <ServiceFeatures />
        </>
    );
} 