"use client";

import SectionActionButton from "@/src/components/common/SectionActionButton";
import { GridContainer, useSectionVisible } from "@/src/components/common/Container";
import ArchiveCountItem from "@/src/components/archive/ArchiveCountItem";
import ArchiveGridCard from "@/src/components/archive/ArchiveGridCard";
import { useArchiveInteractive } from "@/src/hooks/archive/useArchiveInteractive";
import { useRevealStyle } from "@/src/hooks/ui/useRevealStyle";
import { ArchiveCategory } from "@/src/types/archive";
import { cn } from "@/lib/utils";

interface ArchiveInteractiveProps {
    categories: readonly ArchiveCategory[];
}

const ITEMS_PER_PAGE = 6;
const COUNT_ITEM_DELAY_MS = 100;
const GRID_CARD_BASE_DELAY_MS = 250;
const GRID_CARD_STAGGER_MS = 70;
const ACTION_BUTTON_DELAY_MS = 550;

export default function ArchiveInteractive({ categories }: ArchiveInteractiveProps) {
    const isVisible = useSectionVisible();
    const { revealClassName, getRevealStyle } = useRevealStyle({ isVisible });
    const {
        selectedKey,
        categoryOptions,
        visibleItems,
        canToggleItems,
        isExpanded,
        handleSelectCategory,
        handleToggleVisible,
    } = useArchiveInteractive({
        categories,
        itemsPerPage: ITEMS_PER_PAGE,
    });

    return (
        <>
            <div
                className={cn(revealClassName)}
                style={getRevealStyle(COUNT_ITEM_DELAY_MS)}
            >
                <ArchiveCountItem
                    selectedKey={selectedKey}
                    options={categoryOptions}
                    onSelect={handleSelectCategory}
                />
            </div>

            <GridContainer className="mx-auto mt-8 w-full max-w-6xl md:grid-cols-2 xl:grid-cols-3">
                {visibleItems.map((item, index) => (
                    <li
                        key={`${item.category}-${item.id}`}
                        className={cn("w-full", revealClassName)}
                        style={getRevealStyle(
                            GRID_CARD_BASE_DELAY_MS + index * GRID_CARD_STAGGER_MS
                        )}
                    >
                        <ArchiveGridCard item={item} />
                    </li>
                ))}
            </GridContainer>
            {canToggleItems && (
                <div
                    className={cn("mt-4 flex justify-center", revealClassName)}
                    style={getRevealStyle(ACTION_BUTTON_DELAY_MS)}
                >
                    <SectionActionButton
                        type="button"
                        className="w-full min-w-28 sm:w-auto"
                        onClick={handleToggleVisible}
                    >
                        {isExpanded ? "접기" : "더보기"}
                    </SectionActionButton>
                </div>
            )}
        </>
    );
}

