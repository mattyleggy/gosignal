import UspBar from "@/components/common/usp-bar";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import FeatureCard from "@/components/common/feature-card";
import Section from "@/components/common/section";
import { FaStar } from "react-icons/fa6";
import { Arrow } from "@/components/common/arrow";

export default function KeyFeatures() {
    const FaStarIcon = <FaStar className="text-xl" />;

    const usps = [
        {
            title: "Unlimited Edits",
            icon: FaStarIcon,
        },
        {
            title: "$0 Upfront - Risk Free",
            icon: FaStarIcon,
        },
        {
            title: "Professional & Affordable",
            icon: FaStarIcon,
        },
        {
            title: "Australian owned and operated",
            icon: FaStarIcon,
        },
    ];

    const features = [
        {
            title: "Unlimited Edits",
            icon: FaStarIcon,
            description:
                "Our websites are designed to work perfectly on mobile and desktop devices.",
            variant: "default",
        },
        {
            title: "7 Day Turnaround",
            icon: FaStarIcon,
            description:
                "Transform your online presence with our expert web design, development, and digital marketing solutions. Boost your business today!",
            variant: "featured",
        },
        {
            title: "We handle everything",
            icon: FaStarIcon,
            description:
                "Transform your online presence with our expert web design, development, and digital marketing solutions.",
            variant: "default",
        },
    ];

    return (
        <div className="md:mt-20 w-full">
            <Section className="relative pt-0">
                <Arrow
                    className="absolute right-52 top-56 hidden md:block"
                    rotation={180}
                    flip
                    size={80}
                />
                <UspBar usps={usps} className="mb-20 md:mb-0 md:-translate-y-1/2" />
                <div className="flex flex-col justify-center items-center text-center gap-4 px-4 md:px-0">
                    <Badge variant="secondary">Key Features</Badge>
                    <Typography variant="h2">What We Do</Typography>
                    <p className="max-w-2xl">
                        By getting more customers you are also able to increase your rates and be
                        more selective with your jobs
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                variant={feature.variant as "default" | "featured"}
                            >
                                {feature.description}
                            </FeatureCard>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
