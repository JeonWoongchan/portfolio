'use client'

import React from 'react';
import InfoCard from "@/src/components/InfoCard";
import ABOUT_DATA from "@/data/about.json";
import {
    Section,
    SectionHeader,
    GridContainer,
    SectionBody
} from "@/src/components/Container";
import {SectionTitle, SectionDescription} from "@/src/components/Typography";
import {AboutData} from "@/src/types/about";

export default function About() {
    return (
        <Section
            sectionKey={"About"}
            nextSection={"Skills"}
            className={"bg-(--color-navy-light)"}
        >
            <SectionHeader animateOnVisible>
                <SectionTitle>
                    About Me
                </SectionTitle>
                <SectionDescription>
                    적극적으로 협업하며, 지속가능한 서비스를 개발합니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody animateOnVisible>
                {/* 카드 그리드 */}
                <GridContainer>
                    {ABOUT_DATA.map((data: AboutData) => (
                        <li key={data.id}>
                            <InfoCard
                                imageSrc={data.imageSrc}
                                imageAlt={data.imageAlt}
                                title={data.title}
                                description={data.description}
                            />
                        </li>
                    ))}
                </GridContainer>
            </SectionBody>
        </Section>
    );
}
