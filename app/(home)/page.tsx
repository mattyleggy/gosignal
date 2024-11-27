import HomeHeader from "./_components/home-header";
import BackgroundGradient from "@/components/header/background-gradient";
import KeyFeatures from "./_components/key-features";
import { ReasonsToChooseUs } from "./_components/reasons-to-choose-us";
import { CaseStudies } from "./_components/case-studies";
import { PricingSection } from "./_components/pricing-section";
import { PricingPlans } from "./_components/pricing-plans";

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
        </>
    );
}
