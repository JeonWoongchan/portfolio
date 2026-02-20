'use client';

import type {CareerItem} from '@/src/types/career';
import {SmallText} from '@/src/components/Typography';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';

interface CareerCardProjectsProps {
    item: CareerItem;
}

// TODO: 리팩토링 및 UI 배치 수정
export default function CareerCardProjects({item}: CareerCardProjectsProps) {
    return (
        <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
                <h4 className="text-xs tracking-wide text-(--color-text-muted)">PROJECTS ({item.projects.length})</h4>
            </div>

            <ul className="space-y-3">
                {item.projects.map((project) => (
                    <li
                        key={`${item.company}-${project.title}`}
                        className="rounded-xl border border-(--color-border) bg-[rgba(10,15,26,0.34)] px-4 py-0"
                    >
                        <Accordion type="single" collapsible>
                            <AccordionItem value={`${item.company}-${project.title}`} className="border-none">
                                <div className="flex gap-4 py-3">
                                    <div className="w-0.5 shrink-0 rounded-full bg-(--color-accent)" />
                                    <div className="min-w-0 text-left">
                                        <AccordionTrigger className="w-fit py-0 hover:no-underline [&>svg]:hidden">
                                            <p className="text-base font-semibold text-white hover:text-(--color-accent)">{project.title}</p>
                                        </AccordionTrigger>
                                        <p className="mt-1 text-sm text-(--color-text-secondary)">{project.period}</p>
                                    </div>
                                </div>

                                <AccordionContent className="pb-3">
                                    <div className="flex gap-4">
                                        <div className="min-w-0 space-y-2">
                                            <SmallText>{project.description}</SmallText>
                                            <ul className="flex flex-col gap-2 md:flex-row">
                                                {project.stack.map((stack) => (
                                                    <li
                                                        key={`${project.title}-${stack}`}
                                                        className="inline-flex items-center rounded-sm bg-(--color-border-light) px-2 py-1 text-center text-xs text-white"
                                                    >
                                                        {stack}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </li>
                ))}
            </ul>
        </div>
    );
}
