import React from 'react';
import {Section, SectionBody, SectionHeader} from '@/src/components/Container';
import {SectionDescription, SectionTitle} from '@/src/components/Typography';
import CAREER_DATA from '@/data/career';
import CareerCard from '@/src/components/career/CareerCard';

export default function Career() {
    return (
        <Section sectionKey={'Career'} nextSection={'Archive'} className={'bg-(--color-navy-light)'}>
            <SectionHeader animateOnVisible>
                <SectionTitle>Career</SectionTitle>
                <SectionDescription>다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다.</SectionDescription>
            </SectionHeader>

            <SectionBody animateOnVisible className="mx-auto w-full max-w-7xl">
                {CAREER_DATA.map((item, index) => (
                    <div key={`${item.company}-${item.period}`} className={`fade-in-up-${index + 2}`}>
                        <CareerCard item={item} />
                    </div>
                ))}
            </SectionBody>
        </Section>
    );
}
