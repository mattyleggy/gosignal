import Section from "@/components/sections/section";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlowCircle } from "@/components/ui/glow-circle";
import { FaRegClock, FaRegHandshake, FaRegStar } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { RiCustomerService2Line, RiTeamLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

export function PricingSection() {
    const usps = [
        {
            icon: <FaRegStar className="w-5 h-5" />,
            title: "Expert Engineers",
            description: "Our Experienced Team Is Here To Guide You Through.",
        },
        {
            icon: <HiOutlineCurrencyDollar className="w-5 h-5" />,
            title: "Flexible Pricing",
            description: "Affordable Monthly Plans That Fit Your Budget.",
        },
        {
            icon: <FaRegHandshake className="w-5 h-5" />,
            title: "Custom Solutions",
            description: "Tailored Approaches For Your Specific Needs.",
        },
        {
            icon: <RiCustomerService2Line className="w-5 h-5" />,
            title: "Quality Guarantee",
            description: "We Stand Behind Our Work With Full Confidence.",
        },
        {
            icon: <FaRegClock className="w-5 h-5" />,
            title: "24/7 Support",
            description: "Round-The-Clock Assistance When You Need It.",
        },
        {
            icon: <RiTeamLine className="w-5 h-5" />,
            title: "Dedicated Team",
            description: "Personal Account Manager For Every Client.",
        },
    ];

    return (
        <Section variant="light" className="relative">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="w-full lg:w-3/4">
                    <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
                        <Badge variant="secondary">Lorem Ipsum Dummy</Badge>
                        <Typography variant="h2" className="leading-tight">
                            $0 Down, $150 Per Month. 12 Months Minimum
                        </Typography>
                        <p className="text-muted-foreground text-lg">
                            Our company provides all types of roof repairs, both residential and
                            commercial, regardless of the damage level. We also offer partial tile
                            replacement.
                        </p>
                        <Button
                            variant={"dropShadow"}
                            className="bg-primary text-white hover:bg-primary/90 mt-4"
                        >
                            See Available Plans
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 w-full">
                    <GlowCircle size="lg" className="hidden lg:block -top-1/4 -right-1/4" />
                    <GlowCircle size="lg" className="hidden lg:block -bottom-1/4 -left-1/4" />
                    {usps.map((usp, index) => (
                        <div
                            key={index}
                            className={cn(
                                "p-6 rounded-xl space-y-4",
                                "shadow-lg",
                                index === 2 ? "bg-primary text-white" : "bg-white",
                                index % 2 === 1 ? "lg:-translate-y-10" : ""
                            )}
                        >
                            <div
                                className={cn(
                                    "p-2 rounded-full w-10 h-10 flex items-center justify-center",
                                    index === 3 ? "bg-white/10" : "bg-primary/10"
                                )}
                            >
                                {usp.icon}
                            </div>
                            <h3 className="font-semibold text-xl">{usp.title}</h3>
                            <p
                                className={cn(
                                    index === 2 ? "text-white/80" : "text-muted-foreground"
                                )}
                            >
                                {usp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
