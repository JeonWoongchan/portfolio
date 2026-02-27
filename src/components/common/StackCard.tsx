import {cn} from "@/lib/utils";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Card} from "@/components/ui/card";
import {stackMeta, type StackName} from "@/src/types/stack";

interface StackCardProps {
    stackName: StackName;
    compact?: boolean;
    imageClassName?: string;
    tooltipSide?: "top" | "right" | "bottom" | "left";
}

export default function StackCard({stackName, compact = false, imageClassName, tooltipSide = "bottom"}: StackCardProps) {
    const stack = stackMeta[stackName] ?? {img: "/placeholder.svg", color: "#ffffff"};

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {compact ? (
                    <Image
                        src={stack.img}
                        alt={`skill-icon ${stackName}`}
                        width={30}
                        height={30}
                        className={cn("h-7 w-7 object-contain", imageClassName)}
                    />
                ) : (
                    <Card
                        variant="surface"
                        className="group/item relative flex shrink-0 cursor-default flex-col items-center gap-2.5 rounded-md
                        px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        <Image
                            src={stack.img}
                            alt={`skill-icon ${stackName}`}
                            width={30}
                            height={30}
                            className={cn("h-8 w-8 object-contain", imageClassName)}
                        />
                    </Card>
                )}
            </TooltipTrigger>
            <TooltipContent
                className="rounded-md border bg-white text-(--color-navy)"
                side={tooltipSide}
                sideOffset={5}
            >
                <p>{stackName}</p>
            </TooltipContent>
        </Tooltip>
    );
}
