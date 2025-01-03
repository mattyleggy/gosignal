import { ContactForm } from "@/components/forms/contact-form";
import { Typography } from "@/components/common/typography";

export const metadata = {
    title: "Contact Us | GoSignal",
    description: "Get in touch with GoSignal. We're here to help you with your digital marketing needs.",
};

export default function ContactPage() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between">
            <div className="w-full mx-auto px-4 py-24 md:px-6">
                <div className="text-center mb-12">
                    <Typography variant="h1" className="mb-4">
                        Contact Us
                    </Typography>
                    <Typography variant="h3" className="text-muted-foreground font-normal">
                        Have a question or want to work with us? Fill out the form below and we&apos;ll get back to you shortly.
                    </Typography>
                </div>
                <ContactForm />
            </div>
        </main>
    );
} 