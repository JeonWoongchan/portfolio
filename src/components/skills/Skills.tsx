import {Section, SectionBody, SectionHeader} from '@/src/components/common/Container';
import {SectionDescription, SectionTitle} from '@/src/components/common/Typography';
import SKILL_DATA from '@/data/skills';
import SkillCardList from '@/src/components/skills/SkillCardList';

export default function Skills() {
    const categories = SKILL_DATA;

    return (
        <Section
            sectionKey={"Skills"}
            nextSection={"Career"}
            tone="navy"
        >
            <SectionHeader animateOnVisible>
                <SectionTitle>Skills</SectionTitle>
                <SectionDescription>
                    프론트엔드 개발에 필요한 핵심 기술들을 꾸준히 학습하고 실무에 적용합니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody animateOnVisible>
                {/* 스킬 영역 */}
                <SkillCardList categories={categories} />
            </SectionBody>
        </Section>
    );
}
