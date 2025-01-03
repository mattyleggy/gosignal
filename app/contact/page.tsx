import { ContactForm } from "@/components/forms/contact-form";
export const metadata = {
    title: "Contact Us | GoSignal",
    description:
        "Get in touch with GoSignal. We're here to help you with your digital marketing needs.",
};

export default function ContactPage() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between">
            <ContactForm />
        </main>
    );
}
