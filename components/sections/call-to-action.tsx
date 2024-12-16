import { Typography } from "@/components/common/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Section from "@/components/sections/section";
import { cn } from "@/lib/utils";

interface CallToActionProps {
    overlapsFooter?: boolean;
}

export function CallToAction({ overlapsFooter = false }: CallToActionProps) {
    return (
        <Section 
            className={cn(
                "bg-primary text-white relative rounded-3xl",
                "bg-[url('/images/spirals.png')] bg-cover bg-center bg-no-repeat",
                overlapsFooter && "-mb-32 z-10"
            )}
        >
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <Typography variant="h2" className="text-white">
                    Request A Call Back
                </Typography>

                <p className="text-white/80 max-w-2xl mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>

                <div className="flex gap-4 max-w-xl mx-auto">
                    <Input
                        placeholder="Contact Number"
                        className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button
                        variant="secondary"
                        className="bg-white text-primary hover:bg-white/90 px-8"
                    >
                        Request
                    </Button>
                </div>
            </div>
        </Section>
    );
}
