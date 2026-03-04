"use client";

import { Section, SectionBody } from "@/src/components/common/Container";
import {
    HeroTitle,
    SectionDescription,
} from "@/src/components/common/Typography";
import HeroLogo from "@/src/components/hero/HeroLogo";
import CodeBackground from "@/src/components/hero/CodeBackground";
import TerminalLine from "@/src/components/hero/TerminalLine";
import { BOOT_LINES } from "@/data/brand";
import { useHeroIntroSequence } from "@/src/hooks/hero/useHeroIntroSequence";

export default function Hero() {
    const phase = useHeroIntroSequence();
    const isContentVisible = phase >= 2;
    const contentAnimationClassName = isContentVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-4 opacity-0";
    const slideDownAnimationClassName = isContentVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-3 opacity-0 pointer-events-none";

    return (
        <Section
            sectionKey="Hero"
            nextSection="About"
            tone="navy"
            slideDownClassName={`transition-all duration-700 delay-300 ${slideDownAnimationClassName}`}
        >
            <CodeBackground />
            <SectionBody className="w-full items-center justify-center">
                <div className="flex flex-col items-center gap-8">
                    <div
                        className={`flex flex-col gap-1 transition-all duration-700
                        ${phase >= 1 ? "-translate-y-5 opacity-0" : "opacity-100"}`}
                    >
                        {BOOT_LINES.map((line) => (
                            <TerminalLine key={`${line.text}-${line.delay}`} text={line.text} delay={line.delay} />
                        ))}
                    </div>

                    <HeroLogo visible={phase >= 1} />

                    <div className="flex flex-col items-center gap-8">
                        <HeroTitle
                            align="self-center"
                            className={`flex-col gap-1 text-center leading-tight transition-all duration-700 ${contentAnimationClassName}`}
                        >
                            <span>안녕하세요.</span>
                            <span>프론트엔드 개발자</span>
                            <span>
                                <span className="text-(--color-accent)">전웅찬</span>
                                입니다.
                            </span>
                        </HeroTitle>

                        <SectionDescription
                            className={`text-center md:text-lg transition-all duration-700 delay-150 ${contentAnimationClassName}`}
                        >
                            문제 해결을 위해 항상 더 나은 방향을 고민하는 개발자입니다.
                            <br/>
                            지속가능한 서비스를 만드는 것을 목표로 합니다.
                        </SectionDescription>
                    </div>
                </div>
            </SectionBody>
        </Section>
    );
}

