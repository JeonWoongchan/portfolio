import { cn } from "@/lib/utils";
import { BRAND_HERO_FULL_LOGO } from "@/data/brand";

interface BrandLogoProps {
    className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
    return <span className={cn("font-mono text-(--color-accent)", className)}>
        {BRAND_HERO_FULL_LOGO}
    </span>;
}
