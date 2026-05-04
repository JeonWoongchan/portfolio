import {Section, SectionBody, SectionHeader} from '@/src/components/common/Container';
import {SectionDescription, SectionTitle} from '@/src/components/common/Typography';
import CAREER_DATA from '@/data/career';
import CareerContent from '@/src/components/career/CareerContent';

export default function Career() {
    return (
        <Section sectionKey={'Career'} nextSection={'Archive'} tone="navy">
            <SectionHeader>
                <SectionTitle>Career</SectionTitle>
                <SectionDescription>다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다.</SectionDescription>
            </SectionHeader>

            <SectionBody className="mx-auto w-full max-w-7xl justify-start gap-4">
                <CareerContent items={CAREER_DATA} />
            </SectionBody>
        </Section>
    );
}
