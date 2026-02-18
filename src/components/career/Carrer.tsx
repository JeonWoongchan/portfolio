'use client'

import React from 'react';
import {
    Section,
    SectionHeader,
} from "@/src/components/Container";
import {SectionTitle, SectionDescription} from "@/src/components/Typography";

export default function Career() {
    return (
        <Section
            sectionKey={"Career"}
            nextSection={"Archive"}
            className={"bg-(--color-navy-light)"}
        >
            <SectionHeader animateOnVisible>
                <SectionTitle>
                    Career
                </SectionTitle>
                <SectionDescription>
                        다양한 업무와 프로젝트를 통해 경험과 노하우를 쌓고 있습니다.
                </SectionDescription>
            </SectionHeader>

            {/*<SectionBody className={`opacity-0 ${isVisible ? `fade-in-up-2` : ""}`}>*/}
            {/*    */}
            {/*</SectionBody>*/}
        </Section>
    );
}
