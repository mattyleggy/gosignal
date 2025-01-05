import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import Section from "@/components/common/section";
import Image from "next/image";

export default function AboutHero() {
    return (
        <Section className="pt-32 pb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <Badge variant="secondary">About Go Signal</Badge>
                    <Typography variant="h1" className="max-w-xl">
                        Crafting Digital Excellence for Australian Businesses
                    </Typography>
                    <p className="text-lg text-muted-foreground">
                        Since 2022, we&apos;ve been transforming how tradies and health professionals
                        connect with their customers online. Based in Brisbane, we combine local
                        insight with technical expertise to deliver websites that drive real
                        business growth.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium">
                                100+ Projects
                                <br />
                                <span className="text-sm text-muted-foreground">Delivered</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium">
                                24/7 Support
                                <br />
                                <span className="text-sm text-muted-foreground">Available</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative h-[400px] rounded-3xl overflow-hidden">
                    <Image
                        src="/images/about-hero.jpg"
                        alt="Go Signal Team"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </Section>
    );
} 