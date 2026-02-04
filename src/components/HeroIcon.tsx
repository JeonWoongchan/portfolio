import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroIconProps {
    src: string;
    alt: string;
    tooltip: string;
    className?: string;
    width?: number;
    height?: number;
}

export default function HeroIcon({src, alt, tooltip, className, width=128, height=128 }: HeroIconProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Image
                    src={src}
                    className={cn("float-icon w-[1.3em] h-[1.3em]", className)}
                    width={width}
                    height={height}
                    alt={alt}
                />
            </TooltipTrigger>
            <TooltipContent className="whitespace-pre-line py-3">
                <p>{tooltip}</p>
            </TooltipContent>
        </Tooltip>

    );
}