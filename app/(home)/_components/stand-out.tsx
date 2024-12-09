import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import { Arrow } from "@/components/ui/arrow";
import Image from "next/image";
import Section from "@/components/sections/section";
import { cn } from "@/lib/utils";

export default function StandOut() {
    const baseClasses = "flex flex-col justify-center items-center p-8 h-full";
    const topLeftClasses = "rounded-tl-[50px] rounded-br-[50px] " + baseClasses;
    const topRightClasses = "rounded-tr-[50px] rounded-bl-[50px] " + baseClasses;

    return (
        <Section variant="light">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="space-y-4 mb-16">
                    <Badge variant="secondary">What Makes Us Stand Out?</Badge>
                    <Typography variant="h2">
                        We Go Above And Beyond To Help Your Business Stand Out From The Crowd
                    </Typography>
                </div>

                <div className="space-y-6">
                    {/* Main Content Grid */}
                    <div className="flex flex-row space-x-6">
                        {/* Left Column - Analytics Card */}
                        <div className={cn(topLeftClasses, " bg-black/80 space-y-6")}>
                            <div className="flex items-center py-2 px-4 bg-white/10 rounded-lg space-x-2">
                                <Image
                                    src="/images/google-icon.png"
                                    alt="Google Analytics"
                                    width={24}
                                    height={24}
                                />
                                <span className="text-white">Google Analytics & My Business</span>
                            </div>

                            <Image
                                src="/images/graph.png"
                                alt="Analytics Graph"
                                width={600}
                                height={300}
                                className="mb-8"
                            />

                            <div className="text-white/90 text-lg">
                                See Where Your Traffic Is Coming From And How Your Users Interact
                                With Your Website And Use This Information To Improve Leads And
                                Sales.
                            </div>
                        </div>

                        {/* Right Column - Features */}
                        <div className="flex flex-col space-y-6 w-1/2">
                            {/* Feature 1 */}
                            <div
                                className={cn(
                                    topRightClasses,
                                    "bg-emerald-500 text-white/90 text-lg"
                                )}
                            >
                                <div className="leading-relaxed">
                                    Stand out from the crowd with{" "}
                                    <span className="font-bold leading-relaxed">
                                        hand-crafted web design & development
                                    </span>{" "}
                                    as we don't use third-party templates, meaning every website is
                                    unique.
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div
                                className={cn(
                                    topLeftClasses,
                                    "bg-primary/10 text-black/90 text-lg"
                                )}
                            >
                                <div className="leading-relaxed">
                                Our websites are made with <span className="font-bold leading-relaxed">search engine optimisation</span> in mind. We
                                help improve your ranking on Google, Bing and other engines.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-6">
                        {/* Feature 3 */}
                        <div className={cn(topRightClasses, "bg-primary/10 text-black/90 w-1/2")}>
                            We setup your Facebook & Instagram socials and help grow your audience
                            with regular content to keep your customers engaged.
                        </div>

                        {/* Feature 4 */}
                        <div
                            className={cn(topLeftClasses, "bg-primary text-primary-foreground/90")}
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/australia-flag.png"
                                    alt="Australian Flag"
                                    width={130}
                                    height={30}
                                />
                                <div>
                                    We create and host all of our websites in Australia and
                                    architecture them to load fast and efficiently.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
