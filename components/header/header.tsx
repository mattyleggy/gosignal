import Badge from "../badge";
import { Typography } from "../ui/typography";

export default function Header({
    badge,
    title,
    subTitle,
    buttons
}: {
    badge?: React.ReactNode;
    title: React.ReactNode;
    subTitle: React.ReactNode;
    buttons?: React.ReactNode;
}) {
    return <header className="flex flex-row gap-4 w-full max-w-7xl py-10">
        <div className="w-1/2 flex flex-col gap-4 items-start">
            {badge && <Badge>{badge}</Badge>}
            <Typography variant="h1" className="w-4/5">
                {title}
            </Typography>
            <p>{subTitle}</p>
            <div className="w-1/2 flex flex-row gap-4">
                {buttons}
            </div>
        </div>
        <div className="w-1/2">
            Some Image
        </div>
    </header>
}


