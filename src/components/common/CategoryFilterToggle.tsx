'use client'

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { CategoryOption } from "@/src/hooks/useCategoryFilter";

interface CategoryFilterToggleProps {
    selectedKey: string;
    options: readonly CategoryOption[];
    onSelect: (key: string) => void;
}

export default function CategoryFilterToggle({
    selectedKey,
    options,
    onSelect,
}: CategoryFilterToggleProps) {
    return (
        <ToggleGroup
            type="single"
            value={selectedKey}
            spacing={2}
            onValueChange={(value: string) => {
                if (value) {
                    onSelect(value);
                }
            }}
            className="flex-wrap"
        >
            {options.map((option) => (
                <Tooltip key={option.key}>
                    <TooltipTrigger asChild>
                        <span className="inline-flex">
                            <ToggleGroupItem value={option.key} className="px-8">
                                {option.title}
                            </ToggleGroupItem>
                        </span>
                    </TooltipTrigger>
                    <TooltipContent
                        side="top"
                        align="end"
                        sideOffset={-10}
                        className="bg-(--color-accent-variant) text-black rounded-full size-8 min-w-8 flex items-center justify-center text-xs font-semibold"
                    >
                        {option.count}
                    </TooltipContent>
                </Tooltip>
            ))}
        </ToggleGroup>
    );
}
