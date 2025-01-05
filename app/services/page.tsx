import ServicesHero from "@/components/sections/services-hero";
import OurServices from "@/components/sections/our-services";
import ServiceProcess from "@/components/sections/service-process";
import ServiceFeatures from "@/components/sections/service-features";

export const metadata = {
    title: "Our Services | Go Signal",
    description:
        "Discover our professional web design and development services for tradies and health professionals in Brisbane.",
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <OurServices />
            <ServiceProcess />
            <ServiceFeatures />
        </>
    );
} 