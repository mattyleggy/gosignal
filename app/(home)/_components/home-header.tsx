import Header from "@/components/header/header";
import ImageShuffle from "@/components/header/image-shuffle";
import { Arrow } from "@/components/common/arrow";
import { Button } from "@/components/ui/button";
import USPCard from "@/components/common/usp-card";
import { ArrowRightIcon } from "lucide-react";
import { FaRegThumbsUp } from "react-icons/fa";

export default function HomeHeader() {
    return (
        <Header
            badge="#1 Australian Website Designers For Tradies"
            title={
                <>
                    Tradies with modern websites get{" "}
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
                    <Arrow className="absolute -left-14 top-0" />
                    <USPCard className="flex flex-row gap-3 justify-center mb-8 md:mb-0 items-center md:absolute right-16 top-14 z-10">
                        <div className="flex justify-center items-center bg-gray-100 rounded-full p-2 w-10 h-10">
                            <FaRegThumbsUp className="text-xl " />
                        </div>
                        <div className="leading-none whitespace-nowrap">
                            <div className="leading-none font-bold">15+ Years</div>
                            <div className="leading-none text-xs text-gray-500">of experience</div>
                        </div>
                    </USPCard>
                    <ImageShuffle />
                    <USPCard className="flex flex-row gap-3 justify-center items-center mt-8 md:mt-0 md:absolute left-6 top-48 z-10">
                        <div className="leading-none whitespace-nowrap">
                            <div className="leading-none font-bold">15+ Years</div>
                            <div className="leading-none text-xs text-gray-500">of experience</div>
                        </div>
                        <div className="flex justify-center items-center bg-gray-100 rounded-full p-2 w-10 h-10">
                            <FaRegThumbsUp className="text-xl " />
                        </div>
                    </USPCard>
                </div>
            }
        />
    );
}
