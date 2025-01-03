import HomeHeader from "./_components/home-header";
import BackgroundGradient from "@/components/header/background-gradient";
import KeyFeatures from "../../components/sections/key-features";
import { ReasonsToChooseUs } from "../../components/sections/reasons-to-choose-us";
import { PricingSection } from "../../components/sections/pricing-section";
import { PricingPlans } from "../../components/sections/pricing-plans";
import StandOut from "../../components/sections/stand-out";
import WhoAreWe from "../../components/sections/who-are-we";
import FAQ from "../../components/sections/faq";
import { ContactForm } from "../../components/forms/contact-form";
import { CallToAction } from "@/components/forms/call-to-action";
import { Footer } from "@/components/global/footer";
import { CaseStudies } from "@/components/sections/case-studies";

export default function Home() {
    return (
        <>
            <BackgroundGradient />

            <HomeHeader />
            <div id="services" className="w-full">
                <KeyFeatures />
                <ReasonsToChooseUs />
            </div>
            <div id="pricing" className="w-full">
                <PricingSection />
                <CaseStudies />
                <PricingPlans />
            </div>
            <div id="about" className="w-full">
                <StandOut />
                <WhoAreWe />
            </div>
            <div id="contact" className="w-full">
                <FAQ />
                <ContactForm />
            </div>
            <CallToAction overlapsFooter={true} />
            <Footer hasCta={true} />
        </>
    );
}
