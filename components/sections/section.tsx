type SectionProps = {
    children: React.ReactNode;
    variant?: "default" | "light";
    className?: string;
};

export default function Section({ children, variant = "default", className }: SectionProps) {
    return (
        <section
            className={`
                w-full relative             
                ${variant === "default" ? "bg-primary-light" : "bg-white"}                
            `}
            {...(variant === "default" ? {
                style: {
                    backgroundImage: "url('images/repeating-squares.png')",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                }
            } : {})}
        >
            <div className={`w-full max-w-7xl min-h-96 mx-auto flex flex-col items-center leading-normal py-20 ${className || ""}`}>{children}</div>
        </section>
    );
}
