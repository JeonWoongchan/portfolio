import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import {VerticalDivider} from "@/src/components/common/VerticalDivider";

interface BrandSignatureProps {
    name?: string;
    prompt?: string;
    className?: string;
    iconClassName?: string;
    promptClassName?: string;
    nameClassName?: string;
}

export default function BrandSignature({
    name = "Jeon.Woongchan",
    prompt = "~/",
    className,
    iconClassName,
    promptClassName,
    nameClassName,
}: BrandSignatureProps) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Terminal className={cn("h-4 w-4 text-(--color-accent)", iconClassName)} aria-hidden="true" />
            <span className={cn("font-mono text-(--color-accent)", promptClassName)}>{prompt}</span>
            <span className={cn("font-mono text-white", nameClassName)}>{name}</span>
            <VerticalDivider className="mx-0 h-4 w-0.5 animate-pulse bg-(--color-accent)" />
        </div>
    );
}
