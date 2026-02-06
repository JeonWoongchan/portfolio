'use client'

import React, { RefObject } from 'react';
import SlideDown from '@/src/components/SlideDown';
import { Section, SectionHeader, ContentWrapper } from '@/src/components/Container';
import { BodyText, SectionTitle, SmallText } from '@/src/components/Typography';
import { useRegisterSection } from '@/src/hooks/useRegisterSectionRef';
import useSectionOpacity from '@/src/hooks/useSectionOpacity';
import useSectionVisibility from '@/src/hooks/useSectionVisibility';
import SKILL_SECTIONS from '@/data/skills.json';
import { SkillCategory } from "@/src/types/skills";
import { cn } from '@/lib/utils';
import SkillSection from "@/src/components/skills/SkillSection";

export default function Skills() {
    const sectionRef = useRegisterSection('Skills');
    const isVisible = useSectionVisibility(sectionRef as RefObject<HTMLElement>, 0.2);
    const opacity = useSectionOpacity(sectionRef as RefObject<HTMLElement>);

    const getAnimationClass = (index: number) => {
        if (!isVisible) return 'skills-base-position';

        const animations = [
            'skills-slide-right',
            'skills-slide-left-fast',
            'skills-slide-left-slow'
        ];
        return animations[index] || 'skills-base-position';
    };

    return (
        <Section
            ref={sectionRef as RefObject<HTMLElement>}
            className="bg-(--color-primary-variant) text-(--color-text)"
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

                {/* 스킬 그리드 */}
                <div className={cn(
                    `${isVisible ? "" : "opacity-0"}
                    mx-2 mt-4 mb-8 overflow-hidden rounded-lg`,
                    "shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)]",
                    `md:mx-12`
                )}>
                    <div className="grid select-none md:grid-cols-[6fr_4fr]">
                        {SKILL_SECTIONS.map((section: SkillCategory, index) => (
                            <SkillSection
                                key={section.key}
                                section={section}
                                animationClass={getAnimationClass(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <SlideDown next="Work" />
        </Section>
    );
}