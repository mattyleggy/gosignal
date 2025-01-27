import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/navigation/nav";
import { Toaster } from "@/components/ui/toaster";
import { CallToAction } from "@/components/forms/call-to-action";
import { Footer } from "@/components/global/footer";
import { ContactForm } from "@/components/forms/contact-form";
import { GetStartedModal } from "@/components/modals/get-started-modal";

const poppins = localFont({
    src: [
        {
            path: "../public/fonts/Poppins-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Poppins-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-poppins",
    weight: "400 700",
});

export const metadata: Metadata = {
    title: "Aussie Websites for Tradies & Health Professionals | Go Signal",
    description:
        "Go Signal is a Brisbane based digital web agency that specialises in creating websites for tradies and health professionals.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
