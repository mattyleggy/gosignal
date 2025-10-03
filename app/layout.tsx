import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    title: "Custom Aussie Websites for Businesses, Tradies & Health Professionals | Go Signal",
    description:
        "Go Signal is a Brisbane based digital web developer agency that specialises in creating websites for small to medium businesses, tradies and health professionals.",
    keywords:
        "web development, Brisbane, digital agency, business websites, tradie websites, health professional websites, custom websites, Australian web design",
    authors: [{ name: "Go Signal" }],
    creator: "Go Signal",
    publisher: "Go Signal",
    formatDetection: {
        email: true,
        address: false,
        telephone: true,
    },
    metadataBase: new URL("https://www.gosignal.com.au"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://www.gosignal.com.au",
        siteName: "Go Signal",
        title: "Custom Aussie Websites for Businesses, Tradies & Health Professionals | Go Signal",
        description:
            "Go Signal is a Brisbane based digital web developer agency that specialises in creating websites for small to medium businesses, tradies and health professionals.",
        images: [
            {
                url: "/images/hero-man.png",
                width: 1000,
                height: 929,
                alt: "Go Signal - Web Development Agency",
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* OpenLid Flicker-Free Mode */}
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `var openLidTimeout=500;!function(e,i,o,t){var n=e.createElement("style");n.id=t,n.innerHTML="body { opacity: 0; }",e.head.appendChild(n),i.restoreBodyVisibility=function(){var i=e.getElementById(t);i&&i.parentNode&&i.parentNode.removeChild(i)},setTimeout(i.restoreBodyVisibility,o)}(document,window,openLidTimeout,"openlid-noflicker-style");`,
                    }}
                />

                {/* OpenLid Tracking Code */}

                <script
                    type="text/javascript"
                    async
                    src="https://ab.openlid.io/experiments.js?id=tYRqKJpPKXyFc53gF0uBkiDYoiM5DnXD"
                />
            </head>
            <body className={`${poppins.variable} antialiased`}>{children}</body>
        </html> 
    );
}
