import { cn } from "@/lib/utils";

interface HeroTextProps {
    children: React.ReactNode;
    align?: "self-start" | "self-end";
    className?: string;
}

export default function HeroText({ children, align = "self-start", className }: HeroTextProps) {
    return (
        <div className={cn("text-9xl font-bold text-white", align, className)}>
            {children}
        </div>
    );
}