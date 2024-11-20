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
        <div className={`w-full max-w-7xl mx-auto rounded-xl py-8 bg-gradient-to-r from-primary to-[#CAB1F1] ${className || ''}`}>
            <div className="flex items-center justify-center gap-6">
                {usps.map((usp, index) => (
                    <div key={index} className="flex items-center gap-2 justify-center rounded-xl px-4 py-2 bg-white shadow-md">
                        <div className="text-orange-400">{usp.icon}</div>
                        <span className="font-medium">{usp.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
