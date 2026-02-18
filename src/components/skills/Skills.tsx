'use client'

import React from 'react';
import {Section, SectionBody, SectionHeader} from '@/src/components/Container';
import {SectionDescription, SectionTitle} from '@/src/components/Typography';
import SKILL_SECTIONS from '@/data/skills.json';
import SkillCardList from '@/src/components/skills/SkillCardList';

export default function Skills() {
    return (
        <Section
            sectionKey={"Skills"}
            nextSection={"Work"}
            className={"bg-(--color-navy)"}
        >
            <SectionHeader animateOnVisible>
                <SectionTitle>Skills</SectionTitle>
                <SectionDescription>
                    프론트엔드 개발에 필요한 핵심 기술들을 꾸준히 학습하고 실무에 적용합니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody animateOnVisible>
                {/* 스킬 영역 */}
                <SkillCardList sections={SKILL_SECTIONS} />
            </SectionBody>
        </Section>
    );
}
