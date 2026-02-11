import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroIconProps {
    src: string;
    alt: string;
    tooltip: string;
    side?: "top" | "right" | "bottom" | "left" | undefined;
    className?: string;
    width?: number;
    height?: number;
}

export default function TooltipIcon({src, alt, tooltip, side, className, width=128, height=128 }: HeroIconProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Image
                    src={src}
                    className={cn("w-[1.3em] h-[1.3em]", className)}
                    width={width}
                    height={height}
                    alt={alt}
                />
            </TooltipTrigger>
            <TooltipContent className="whitespace-pre-line py-3" side={side}>
                <p>{tooltip}</p>
            </TooltipContent>
        </Tooltip>
    );
}