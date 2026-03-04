import {Section, SectionBody, SectionHeader} from '@/src/components/common/Container';
import {SectionDescription, SectionTitle} from '@/src/components/common/Typography';
import SKILL_DATA from '@/data/skills';
import SkillsContent from '@/src/components/skills/SkillsContent';

export default function Skills() {
    const categories = SKILL_DATA;

    return (
        <Section
            sectionKey={"Skills"}
            nextSection={"Career"}
            tone="navy"
        >
            <SectionHeader>
                <SectionTitle>Skills</SectionTitle>
                <SectionDescription>
                    프론트엔드 개발에 필요한 핵심 기술을 이해하고 프로젝트에 적용합니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody>
                {/* 스킬 영역 */}
                <SkillsContent categories={categories} />
            </SectionBody>
        </Section>
    );
}
