import { cn } from "@/lib/utils";
import { BrandLogo } from "@/src/components/common/BrandLogo";
import {VerticalDivider} from "@/src/components/common/VerticalDivider";
import { BRAND_DEFAULT_NAME } from "@/data/brand";

interface BrandSignatureProps {
    name?: string;
    className?: string;
    logoClassName?: string;
    nameClassName?: string;
}

export default function BrandSignature({
    name = BRAND_DEFAULT_NAME,
    className,
    logoClassName,
    nameClassName,
}: BrandSignatureProps) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <BrandLogo className={logoClassName} />
            <span className={cn("font-mono text-white", nameClassName)}>{name}</span>
            <VerticalDivider className="mx-0 h-4 w-0.5 animate-pulse bg-(--color-accent)" />
        </div>
    );
}
