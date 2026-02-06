'use client'

import React, {RefObject} from 'react';
import {useRegisterSection} from "@/src/hooks/useRegisterSectionRef";
import Image from "next/image";
import InfoCard from "@/src/components/InfoCard";
import ABOUT_DATA from "@/data/about.json"
import { Section, SectionHeader, ContentWrapper, TextGroup, GridContainer } from "@/src/components/Container";
import { SectionTitle, BodyText, SmallText } from "@/src/components/Typography";
import useSectionVisibility from "@/src/hooks/useSectionVisibility";
import SlideDown from "@/src/components/SlideDown";
import {AboutData} from "@/src/types/about";

export default function About()  {
    const sectionRef = useRegisterSection('About');
    const isVisible = useSectionVisibility(sectionRef as RefObject<HTMLElement>, 0.2);

    return (
        <Section ref={sectionRef as RefObject<HTMLElement>} className="justify-between">
            <div>
                {/* 섹션 헤더 */}
                <SectionHeader className={`opacity-0 ${isVisible ? "fade-in-down" : ""}`}>
                    <SectionTitle>ABOUT ME</SectionTitle>
                </SectionHeader>

                {/* 이미지 + 설명 영역 */}
                <ContentWrapper>
                    <Image
                        src="/images/developer4.svg"
                        alt="logo"
                        width={300}
                        height={300}
                        className={`opacity-0 ${isVisible ? "fade-in-up-1" : ""}`}
                    />
                    <TextGroup className={`font-bold opacity-0 ${isVisible ? "fade-in-up-2" : ""}`}>
                        <BodyText>
                            안녕하세요! 2년차 프론트엔드 개발자 전웅찬입니다.
                        </BodyText>
                        <SmallText className="max-w-prose">
                            HTML, CSS, JavaScript를 시작으로 React를 통해 상태 관리와
                            컴포넌트 기반 구조에 대해 경험하였고, SEO를 개선하고 SSR을 경험해보기 위해
                            Next.js를 이용한 페이지도 구현해보았습니다.
                            다양한 라이브러리, 프레임워크에 관심을 갖고 항상 배우며
                            성장하는 개발자를 목표하고 있습니다.
                        </SmallText>
                    </TextGroup>
                </ContentWrapper>

                {/* 카드 그리드 */}
                <GridContainer>
                    {ABOUT_DATA.map((data: AboutData) => (
                        <li
                            key={data.id}
                            className={`opacity-0 ${isVisible ? `fade-in-up-3` : ""}`}
                        >
                            <InfoCard
                                imageSrc={data.imageSrc}
                                imageAlt={data.imageAlt}
                                title={data.title}
                                description={data.description}
                            />
                        </li>
                    ))}
                </GridContainer>
            </div>
            <SlideDown next={'Skills'} />
        </Section>
    );
};
