interface Usp {
    title: string;
    icon: React.ReactNode;
}

interface UspBarProps {
    usps: Usp[];
    className?: string;
}

export default function UspBar({ usps, className }: UspBarProps) {
    return (
        <div
            className={`mt-6 lg:mt-0 w-full max-w-7xl mx-auto rounded-xl py-6 sm:py-8 bg-gradient-to-r from-primary to-primary/40 ${
                className || ""
            } relative overflow-hidden`}
        >
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary/40 to-transparent z-10"></div>

            <div className="animate-scroll flex whitespace-nowrap sm:gap-6 gap-4">
                <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-0">
                    {usps.map((usp, index) => (
                        <div
                            key={`first-${index}`}
                            className="flex items-center gap-2 justify-center rounded-xl px-3 py-2 sm:px-4 bg-white shadow-md"
                        >
                            <div className="text-orange-400">{usp.icon}</div>
                            <span className="font-medium text-sm sm:text-base whitespace-nowrap">
                                {usp.title}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-0">
                    {usps.map((usp, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex items-center gap-2 justify-center rounded-xl px-3 py-2 sm:px-4 bg-white shadow-md"
                        >
                            <div className="text-orange-400">{usp.icon}</div>
                            <span className="font-medium text-sm sm:text-base whitespace-nowrap">
                                {usp.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
