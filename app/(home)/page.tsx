import HomeHeader from "./_components/home-header";
import BackgroundGradient from "@/components/header/background-gradient";
import KeyFeatures from "./_components/key-features";
import { ReasonsToChooseUs } from "./_components/reasons-to-choose-us";
import { PricingSection } from "./_components/pricing-section";
import { PricingPlans } from "./_components/pricing-plans";
import StandOut from "./_components/stand-out";
import WhoAreWe from "./_components/who-are-we";
import FAQ from "./_components/faq";
import { ContactForm } from "./_components/contact-form";
import { CallToAction } from "@/components/sections/call-to-action";
import { Footer } from "@/components/sections/footer";

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
