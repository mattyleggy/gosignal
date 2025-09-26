import { BrowserMockup } from "@/components/common/browser-mockup";
import Section from "@/components/common/section";
import { Typography } from "@/components/common/typography";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export function CaseStudies() {
    return (
        <Section className="relative">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
                <div className="flex items-center gap-2">
                    <Badge variant={"secondary"}>
                    Look At Our Most Recent Happy Customer
                    </Badge>
                </div>

                <Typography variant="h2" className="max-w-4xl">
                    Don&apos;t Just Take Our Word For It, Take A Look For Yourself
                </Typography>
            </div>

            <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 justify-center items-center">
                <div className="w-full lg:w-[1200px]">
                    <BrowserMockup url="https://www.peachchess.com.au/">
                        <Image
                            src="/images/portfolio/peach-chess.png"
                            alt="Brissie Roofing Website"
                            height={1200}
                            width={1200}
                            className="rounded-xl shadow-md bg-contain w-full"
                        />
                    </BrowserMockup>
                </div>

                <div className="space-y-6 text-center lg:text-left">
                    <p className="text-muted-foreground">
                        We built a clean, user-friendly website for a Toowoomba based chess coach,
                        designed to showcase their services, attract more leads, and make it easy
                        for customers to get in touch.
                    </p>

                    <p className="text-muted-foreground">
                        The site looks great on any device and highlights their expertise in a way
                        that feels professional and approachable.
                    </p>

                    <Button variant="dropShadow" className="gap-2" asChild>
                        <Link href="https://www.peachchess.com.au/" target="_blank">
                            Visit Website
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
