import { Badge } from "../ui/badge";
import { GlowCircle } from "../ui/glow-circle";
import { Typography } from "../common/typography";

export default function Header({
    badge,
    title,
    subTitle,
    buttons,
    rightContent,
}: {
    badge?: React.ReactNode;
    title: React.ReactNode;
    subTitle: React.ReactNode;
    buttons?: React.ReactNode;
    rightContent: React.ReactNode;
}) {
    return (
        <header className="flex flex-col md:flex-row gap-8 md:gap-4 w-full max-w-7xl py-6 md:py-10 relative px-4 md:px-0">
            <GlowCircle size="lg" className="hidden md:block -left-1/4 top-10" />
            <div className="w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start justify-center text-center md:text-left">
                {badge && <Badge variant={"secondary"}>{badge}</Badge>}
                <Typography variant="h1" className="w-full md:w-4/5">
                    {title}
                </Typography>
                <p className="text-base md:text-lg">{subTitle}</p>
                <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 items-center md:items-start">
                    {buttons}
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                {rightContent}
            </div>
        </header>
    );
}
