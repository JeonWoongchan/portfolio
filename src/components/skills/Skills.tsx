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

export default function Skills() {
    const sectionRef = useRegisterSection('Skills');
    const isVisible = useSectionVisibility(sectionRef as RefObject<HTMLElement>, 0.2);
    const opacity = useSectionOpacity(sectionRef as RefObject<HTMLElement>);

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

            <SectionBody>
                {/* 설명 영역 */}
                {/*<ContentWrapper className="xl:flex-col">*/}
                {/*    <BodyText className={cn("max-w-4xl opacity-0 justify-start", isVisible && "fade-in-up-1")}>*/}
                {/*        JavaScript로 시작하여 React와 NextJS까지 경험해 보았습니다.*/}
                {/*        React는 제가 가장 많이 사용한 라이브러리로 다양한 페이지를 제작할 수 있습니다.*/}
                {/*    </BodyText>*/}
                {/*    <BodyText className={cn("max-w-4xl opacity-0", isVisible && "fade-in-up-2")}>*/}
                {/*        팀 프로젝트를 하면서 생긴 백엔드 기능에 대한 관심으로 Next.js도 사용해 보았으며,*/}
                {/*        Next.js 외에 TypeScript 및 다른 라이브러리에도 관심을 가지고 공부하고 있습니다.*/}
                {/*    </BodyText>*/}
                {/*</ContentWrapper>*/}

                {/* 스킬 영역 */}
                <SkillCardList sections={SKILL_SECTIONS} />
            </SectionBody>
        </Section>
    );
}



