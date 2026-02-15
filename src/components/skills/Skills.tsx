'use client'

import React, { RefObject } from 'react';
import {Section, SectionBody, SectionHeader} from '@/src/components/Container';
import { SectionDescription, SectionTitle} from '@/src/components/Typography';
import { useRegisterSection } from '@/src/hooks/useRegisterSectionRef';
import useSectionOpacity from '@/src/hooks/useSectionOpacity';
import useSectionVisibility from '@/src/hooks/useSectionVisibility';
import SKILL_SECTIONS from '@/data/skills.json';
import { cn } from '@/lib/utils';
import SkillCardList from "@/src/components/skills/SkillCardList";
import useMinWidth from "@/src/hooks/useMinWidth";

const MIN_OPACITY_WIDTH_PX = 1536;

export default function Skills() {
    const sectionRef = useRegisterSection('Skills');
    const isVisible = useSectionVisibility(sectionRef as RefObject<HTMLElement>, 0.2);
    const isWide = useMinWidth(MIN_OPACITY_WIDTH_PX);
    const opacity = useSectionOpacity(sectionRef as RefObject<HTMLElement>, isWide);

    return (
        <Section
            ref={sectionRef as RefObject<HTMLElement>}
            opacityValue={opacity}
            nextSection={"Work"}
        >
            <SectionHeader className={cn("opacity-0", isVisible && "fade-in-down")}>
                <SectionTitle>Skills</SectionTitle>
                <SectionDescription>
                    프론트엔드 개발에 필요한 핵심 기술들을 꾸준히 학습하고 실무에 적용해왔습니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody className={`opacity-0 ${isVisible ? `fade-in-up-2` : ""}`}>
                {/* 스킬 영역 */}
                <SkillCardList sections={SKILL_SECTIONS}/>
            </SectionBody>
        </Section>
    );
}



