import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServicesHero() {
    return (
        <Header
            badge="Professional Web Services"
            title={
                <>
                    Expert Web Solutions for{" "}
                    <span className="text-primary inline leading-none">Australian Businesses</span>
                </>
            }
            subTitle="From custom website design to ongoing maintenance, we provide comprehensive digital solutions tailored to your business needs."
            buttons={
                <>
                    <Button variant="dropShadow">View Our Services</Button>
                    <Button variant="outline">
                        Get a Quote <ArrowRight className="w-4 h-4" />
                    </Button>
                </>
            }
            rightContent={
                <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                        src="/images/services-hero.png"
                        alt="Web Services Illustration"
                        width={500}
                        height={400}
                        className="object-contain"
                    />
                </div>
            }
        />
    );
} 