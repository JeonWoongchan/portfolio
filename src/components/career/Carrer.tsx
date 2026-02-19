'use client'

import React from 'react';
import {
    Section, SectionBody,
    SectionHeader
} from "@/src/components/Container";
import {SectionDescription, SectionTitle, SmallText} from "@/src/components/Typography";
import CAREER_DATA from "@/data/career.json"
import Image from "next/image";
import {stackMeta} from "@/src/types/stack";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {CareerItem, TimelineItemProps} from "@/src/types/career";

function TimelineItem({ item, isLast }: TimelineItemProps) {
    return (
        <div className="relative flex w-fit justify-start">
            {/* Period Column */}
            <div className="w-28.5 shrink-0 text-right">
                <SmallText className="text-xs text-(--color-text-caption) leading-7">
                    {item.period}
                </SmallText>
            </div>

            {/* Line Column */}
            <div className="flex w-8 shrink-0 flex-col items-center pt-2">
                {/* Dot */}
                <div className="z-[1] size-3.5 shrink-0 rounded-full border-[2.5px] border-(--color-highlight) bg-(--color-surface-strong)" />
                {/* Vertical Line */}
                <div className="mt-1 min-h-10 w-[1.5px] flex-1 bg-[linear-gradient(to_bottom,var(--color-highlight-trace-start),var(--color-highlight-trace-mid),transparent)]" />
            </div>

            {/* Content Column */}
            <div
                className={`flex flex-col gap-2 w-[36rem] pl-4 ${isLast ? 'pb-0' : 'pb-10'}`}
            >
                {/* Header */}
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">
                        {item.company}
                    </span>
                    {item.isCurrent && (
                        <span className="inline-flex items-center gap-1 rounded-4xl border border-(--color-highlight-border) bg-(--color-highlight-soft) px-2 py-0.5 text-[11px] font-semibold text-(--color-highlight)">
                            <span className="size-1.5 animate-pulse rounded-full bg-(--color-highlight)" />
                            현재
                        </span>
                    )}
                </div>

                {/* Subtitle */}
                <SmallText className="text-(--color-text-body)">
                    {item.subtitle}
                </SmallText>

                {/* Stack Badges */}
                <div className="flex gap-2">
                    {item.stack.map((s,i) => (
                        <Image
                            key={`${item.company}-${s}-${i}`}
                            src={stackMeta[s].img || "/placeholder.svg"}
                            alt={`career-icon ${s}`}
                            width={30}
                            height={30}
                        />
                    ))}
                </div>

                {/* Task List Accordion Item */}
                <AccordionItem value={`${item.company}-${item.period}`} className="border-none">
                    <AccordionTrigger
                        className="py-0 font-medium text-(--color-highlight) hover:no-underline"
                    >
                        주요 업무 내용 보기
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-0">
                        <ul className="m-0 pl-4">
                            {item.tasks.map((task, i) => (
                                <li key={i} className="leading-[1.7] text-(--color-text-caption)">
                                    <SmallText className="leading-[1.7] text-(--color-text-caption)">
                                        {task}
                                    </SmallText>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </div>
        </div>
    );
}

function WorkExperience() {
    const careerData = CAREER_DATA as CareerItem[];

    return (
        <div className="mx-auto w-fit">
            <Accordion type="single" collapsible>
                {careerData.map((item, i) => (
                    <div key={item.company} className={`fade-in-up-${i + 3}`}>
                        <TimelineItem
                            item={item}
                            isLast={i === careerData.length - 1}
                        />
                    </div>
                ))}
            </Accordion>
        </div>
    );
}

export default function Career() {
    return (
        <Section
            sectionKey={"Career"}
            nextSection={"Archive"}
            className={"bg-(--color-navy-light)"}
        >
            <SectionHeader animateOnVisible>
                <SectionTitle>
                    Career
                </SectionTitle>
                <SectionDescription>
                    다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody>
                <WorkExperience/>
            </SectionBody>
        </Section>
    );
}
