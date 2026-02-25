'use client'

import type {CareerItem} from '@/src/types/career';
import CareerCardOverview from '@/src/components/career/CareerCardOverview';
import React from "react";
import CareerCardProjects from "@/src/components/career/CareerCardProjects";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import CareerHighlights from "@/src/components/career/CareerHighlights";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";

interface CareerCardProps {
    item: CareerItem;
}

export default function CareerCard({item}: CareerCardProps) {
    const [isDetailOpen, setIsDetailOpen] = React.useState(false);
    const ToggleIcon = isDetailOpen ? MdKeyboardArrowUp : MdKeyboardArrowDown;

    const handleToggleDetail = () => {
        setIsDetailOpen((prev) => !prev);
    };

    return (
        <article className="w-full rounded-2xl border border-(--color-border-light) bg-(--color-navy)">
            <Accordion type="single" collapsible value={isDetailOpen ? "open" : ""}>
                <AccordionItem value="open" className="border-none">
                    <CareerCardOverview item={item} />
                    <AccordionTrigger
                        onClick={handleToggleDetail}
                        className={`flex h-10 w-full justify-center hover:no-underline [&>svg:last-child]:hidden 
                        ${isDetailOpen ? "rounded-none bg-(--color-accent) text-(--color-navy)" : "rounded-t-none rounded-b-xl bg-(--color-border) text-white"}`}
                    >
                        <span className="inline-flex items-center gap-1 text-sm">
                            <ToggleIcon className="text-lg" />
                            {isDetailOpen ? "상세 내용 접기" : "상세 내용 보기"}
                        </span>
                    </AccordionTrigger>
                    <AccordionContent className="flex gap-8 p-6">
                        <CareerCardProjects item={item} />
                        <CareerHighlights company={item.company} highlights={item.highlights} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </article>
    );
}
