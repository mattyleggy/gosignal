import Header from "@/components/header/header";
import { Arrow } from "@/components/common/arrow";
import { Button } from "@/components/ui/button";
import USPCard from "@/components/common/usp-card";
import { ArrowRightIcon } from "lucide-react";
import { FaRegThumbsUp } from "react-icons/fa";
import Image from "next/image";

export default function HomeHeader() {
    return (
        <Header
            badge="#1 Australian Website Designers For Professionals"
            title={
                <>
                    Businesses with modern websites get{" "}
                    <span className="text-primary inline leading-none">30% more customers</span>
                </>
            }
            subTitle="With over 15 years of experience, we deliver affordable and high quality websites to help you get more customers."
            buttons={
                <>
                    <Button variant="dropShadow">Get Started</Button>
                    <Button variant="outline">
                        Contact Us <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                </>
            }
            rightContent={
                <div className="w-full h-full flex-col md:flex-row flex justify-center md:justify-end items-center md:items-end relative">
                    {/* Desktop Arrow */}
                    <Arrow className="absolute -left-20 bottom-10 hidden md:block" delay={0.4} rotation={60} />

                    {/* Image Shuffle */}
                    <div className="relative hidden md:block">
                        <Image src="/images/home-hero.png" alt="Hero Image" width={650} height={650} className={`-mt-8`} />
                    </div>

                    {/* Mobile Image */}
                    <div className="flex flex-col md:hidden gap-4">
                        {/* <Image src="/images/hero-man.png" alt="Hero Image" width={650} height={650} className="" /> */}
                        <Image src="/images/hero-woman.png" alt="Hero Image" width={650} height={650} className="" />
                    </div>
                </div>
            }
            leftClassName="md:-mt-10"
            className="md:py-0"

        />
    );
}
