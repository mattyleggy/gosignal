import Section from "@/components/sections/section";
import USPCard from "@/components/common/usp-card";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { GlowCircle } from "@/components/ui/glow-circle";
import Image from "next/image";
import { FaRegThumbsUp } from "react-icons/fa";
import { IconCircle } from "@/components/common/icon-circle";
import ImageShadow from "@/components/common/image-shadow";

const reasons = [
    {
        icon: <FaRegThumbsUp className="text-xl" />,
        title: "Affordable Prices",
        description:
            "From Free Inspections, Claim Assistance, Roof Replacements And Home Upgrades.",
    },
    {
        icon: <FaRegThumbsUp className="text-xl" />,
        title: "Expert Engineers",
        description:
            "Our Experienced, Knowledgeable Team Is Here To Guide You Through Every Step Of The Process.",
    },
    {
        icon: <FaRegThumbsUp className="text-xl" />,
        title: "Quality Materials",
        description:
            "We Understand The Importance Of Protecting Your Family And Investment, And We Treat With Care.",
    },
];

export function ReasonsToChooseUs() {
    return (
        <Section variant="light" className="relative">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
                {/* Left side - Image */}
                <div className="relative">
                    <div className="">
                        <ImageShadow src="/images/house.png" alt="Modern building" />

                        {/* Stats overlay */}
                        <USPCard className="flex flex-row gap-3 justify-center items-center absolute left-2 top-14 z-10">
                            <IconCircle
                                icon={<FaRegThumbsUp className="text-xl" />}
                                variant="light"
                            />
                            <div className="leading-none whitespace-nowrap">
                                <div className="leading-none font-bold">398K</div>
                                <div className="leading-none text-xs text-gray-500">
                                    Happy users
                                </div>
                            </div>
                        </USPCard>
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="space-y-8">
                    <div className="flex flex-col items-start gap-4">
                        <Badge variant="secondary">Why Choose Us</Badge>
                        <Typography variant="h2">Reasons To Choose Us For Your Website</Typography>
                        <p className="text-muted-foreground">
                            We have been installing boilers and heating systems for over 10 years
                            and we are proud to say we are experts in this field. We have a team of
                            skilled & qualified members.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {reasons.map((reason, index) => (
                            <div className="flex gap-4">
                                <IconCircle icon={reason.icon} size="lg" />
                                <div>
                                    <h3 className="font-semibold">{reason.title}</h3>
                                    <p className="text-muted-foreground">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <GlowCircle size="lg" className="z-0 -top-1/4 -right-60" />
        </Section>
    );
}
