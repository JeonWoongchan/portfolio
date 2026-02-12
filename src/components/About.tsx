'use client'

import React, {RefObject} from 'react';
import {useRegisterSection} from "@/src/hooks/useRegisterSectionRef";
import InfoCard from "@/src/components/InfoCard";
import ABOUT_DATA from "@/data/about.json"
import {
    Section,
    SectionHeader,
    GridContainer,
    SectionBody
} from "@/src/components/Container";
import {SectionTitle, SectionDescription} from "@/src/components/Typography";
import useSectionVisibility from "@/src/hooks/useSectionVisibility";
import {AboutData} from "@/src/types/about";
import {cn} from "@/lib/utils";
import useSectionOpacity from "@/src/hooks/useSectionOpacity";

export default function About()  {
    const sectionRef = useRegisterSection('About');
    const isVisible = useSectionVisibility(sectionRef as RefObject<HTMLElement>, 0.2);
    const opacity = useSectionOpacity(sectionRef as RefObject<HTMLElement>);

    return (
        <Section
            ref={sectionRef as RefObject<HTMLElement>}
            opacityValue={opacity}
            nextSection={"Skills"}
            className={"bg-(--color-navy-light)"}
        >
            <SectionHeader className={cn("opacity-0", isVisible && "fade-in-down")}>
                <SectionTitle>
                    About Me
                </SectionTitle>
                <SectionDescription>
                    적극적으로 협업하며, 지속가능한 서비스를 개발합니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody className={`opacity-0 ${isVisible ? `fade-in-up-2` : ""}`}>
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
};
