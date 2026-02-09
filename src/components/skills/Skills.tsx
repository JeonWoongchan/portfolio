'use client'

import React, { RefObject } from 'react';
import {Section, SectionBody, SectionHeader} from '@/src/components/Container';
import { SectionDescription, SectionTitle} from '@/src/components/Typography';
import { useRegisterSection } from '@/src/hooks/useRegisterSectionRef';
import useSectionOpacity from '@/src/hooks/useSectionOpacity';
import useSectionVisibility from '@/src/hooks/useSectionVisibility';
import SKILL_SECTIONS from '@/data/skills.json';
import { cn } from '@/lib/utils';
import SkillMarquee from "@/src/components/skills/SkillMarquee";
import {Card} from "@/components/ui/card";

// TODO: 마퀴에서 리스트로 변경
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
                    기술 스택 및 도구입니다.
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

                {/* 마퀴 스킬 영역 */}
                <Card
                    className="mx-0 overflow-hidden rounded-lg p-6"
                    style={{
                        backgroundColor: "#050a13",
                        boxShadow: "0 2.8px 2.2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 12.5px 10px rgba(0,0,0,0.06), 0 22.3px 17.9px rgba(0,0,0,0.072), 0 41.8px 33.4px rgba(0,0,0,0.086), 0 100px 80px rgba(0,0,0,0.12)",
                    }}
                >
                    <SkillMarquee sections={SKILL_SECTIONS} />
                </Card>
            </SectionBody>
        </Section>
    );
}



