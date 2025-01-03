import { ContactForm } from "@/components/forms/contact-form";
import { Typography } from "@/components/common/typography";

export const metadata = {
    title: "Contact Us | GoSignal",
    description: "Get in touch with GoSignal. We're here to help you with your digital marketing needs.",
};

export default function ContactPage() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between">
            <div className="w-full mx-auto px-4 md:px-6">               
                <ContactForm  />
            </div>
        </main>
    );
} 