import WhoAreWe from "@/components/sections/who-are-we";
import OurProcess from "@/components/sections/our-process";
import OurValues from "@/components/sections/our-values";
import AboutHero from "@/components/sections/about-hero";

export const metadata = {
    title: "About Us | Go Signal",
    description:
        "Learn more about Go Signal, your trusted partner in creating professional websites for tradies and health professionals in Brisbane.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />

            <OurValues />

            {/* Who Are We Section */}
            <WhoAreWe />

            {/* Our Process Section */}
            <OurProcess />
        </>
    );
}
