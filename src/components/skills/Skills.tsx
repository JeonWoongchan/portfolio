'use client'

import React, { RefObject } from 'react';
import SlideDown from '@/src/components/SlideDown';
import { Section, SectionHeader, ContentWrapper } from '@/src/components/Container';
import { BodyText, SectionTitle, SmallText } from '@/src/components/Typography';
import { useRegisterSection } from '@/src/hooks/useRegisterSectionRef';
import useSectionOpacity from '@/src/hooks/useSectionOpacity';
import useSectionVisibility from '@/src/hooks/useSectionVisibility';
import SKILL_SECTIONS from '@/data/skills.json';
import { cn } from '@/lib/utils';
import Image from "next/image";
import {SkillCategory, SkillItem} from "@/src/types/skills";

export default function Skills() {
    const sectionRef = useRegisterSection('Skills');
    const isVisible = useSectionVisibility(sectionRef as RefObject<HTMLElement>, 0.2);
    const opacity = useSectionOpacity(sectionRef as RefObject<HTMLElement>);

    return (
        <Section
            ref={sectionRef as RefObject<HTMLElement>}
            className={"bg-(--color-primary-variant) text-(--color-text)"}
        >
            <div style={{ opacity }} className="w-full">
                {/* 섹션 헤더 */}
                <SectionHeader className={cn("opacity-0", isVisible && "fade-in-down")}>
                    <SectionTitle>SKILLS</SectionTitle>
                </SectionHeader>

                {/* 설명 영역 */}
                <ContentWrapper className="xl:flex-col">
                    <BodyText className={cn("max-w-4xl opacity-0", isVisible && "fade-in-up-1")}>
                        JavaScript로 시작하여 React와 NextJS까지 경험해 보았습니다.
                        React는 제가 가장 많이 사용한 라이브러리로 다양한 페이지를 제작할 수 있습니다.
                    </BodyText>
                    <SmallText className={cn("max-w-4xl opacity-0", isVisible && "fade-in-up-2")}>
                        팀 프로젝트를 하면서 생긴 백엔드 기능에 대한 관심으로 Next.js도 사용해 보았으며,
                        Next.js 외에 TypeScript 및 다른 라이브러리에도 관심을 가지고 공부하고 있습니다.
                    </SmallText>
                </ContentWrapper>

                {/* 마퀴 스킬 영역 */}
                <div
                    className="mx-0 overflow-hidden rounded-lg p-6 md:p-8 xl:mx-28"
                    style={{
                        backgroundColor: "#050a13",
                        boxShadow: "0 2.8px 2.2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 12.5px 10px rgba(0,0,0,0.06), 0 22.3px 17.9px rgba(0,0,0,0.072), 0 41.8px 33.4px rgba(0,0,0,0.086), 0 100px 80px rgba(0,0,0,0.12)",
                    }}
                >
                    <div className="flex flex-col gap-5">
                        {SKILL_SECTIONS.map((section, index) => (
                            <MarqueeRow
                                key={section.key}
                                section={section}
                                reverse={index % 2 !== 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <SlideDown next="Work" />
        </Section>
    );
}


function SkillChip({ item }: { item: SkillItem }) {
    return (
        <div className="group/item relative flex shrink-0 cursor-default items-center gap-2.5 rounded-md bg-white px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <Image
                src={item.img || "/placeholder.svg"}
                alt={`${item.name} icon`}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
                crossOrigin="anonymous"
                unoptimized
            />
            <span className="whitespace-nowrap text-sm font-bold text-black">
        {item.name}
      </span>

            {item.content && (
                <div className="pointer-events-none absolute -bottom-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-all duration-200 group-hover/item:opacity-100">
                    {item.content}
                    <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black" />
                </div>
            )}
        </div>
    )
}

function MarqueeRow({ section, reverse = false }: { section: SkillCategory; reverse?: boolean }) {
    const repeated = Array(8).fill(section.items).flat()

    return (
        <div className="flex flex-col gap-3">
            {/* Category Label */}
            <h3
                className="px-1 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#03e8f9" }}
            >
                {section.title}
            </h3>

            {/* Marquee Track */}
            <div className="marquee-track relative overflow-hidden">
                {/* Edge fades */}
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12"
                    style={{ background: "linear-gradient(to right, #050a13, transparent)" }}
                />
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12"
                    style={{ background: "linear-gradient(to left, #050a13, transparent)" }}
                />

                <div
                    className={`marquee-inner flex w-max gap-3 pb-3 ${reverse ? "marquee-reverse" : "marquee"}`}
                >
                    {repeated.map((item, i) => (
                        <SkillChip key={`${section.key}-${item.name}-${i}`} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}