import { cn } from "@/lib/utils";
import StackCard from "@/src/components/common/StackCard";

interface SocialStackLinksProps {
    className?: string;
    tooltipSide?: "top" | "right" | "bottom" | "left";
}

export default function SocialStackLinks({
    className,
    tooltipSide = "top",
}: SocialStackLinksProps) {
    return (
        <div className={cn("flex gap-2", className)}>
            <StackCard
                stackName={"GitHub"}
                compact={true}
                imageClassName="bg-white rounded-sm cursor-pointer"
                tooltipSide={tooltipSide}
            />
            <StackCard
                stackName={"Velog"}
                compact={true}
                imageClassName="cursor-pointer"
                tooltipSide={tooltipSide}
            />
        </div>
    );
}
