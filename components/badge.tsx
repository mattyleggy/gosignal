export default function Badge({ children }: { children: React.ReactNode }) {
    return <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full  text-md">
        {children}
    </div>
}