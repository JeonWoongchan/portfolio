"use client";

import { useCallback, useRef, useState } from "react";
import ARCHIVE_DATA from "@/data/archive";
import { Section, SectionBody, SectionHeader } from "@/src/components/common/Container";
import { SectionDescription, SectionTitle } from "@/src/components/common/Typography";
import ArchiveInteractive from "@/src/components/archive/ArchiveInteractive";
import Footer from "@/src/components/footer/Footer";
import { useArchiveFooterTrigger } from "@/src/hooks/useArchiveFooterTrigger";

export default function Archive() {
    const archiveSectionRef = useRef<HTMLElement | null>(null);
    const [isFooterOpen, setIsFooterOpen] = useState(false);

    const handleOpenDrawer = useCallback(() => {
        setIsFooterOpen(true);
    }, []);

    useArchiveFooterTrigger({
        archiveSectionRef,
        isFooterOpen,
        onOpenFooter: handleOpenDrawer,
    });

    return (
        <>
            <Section
                ref={archiveSectionRef}
                sectionKey={"Archive"}
                onNextAction={handleOpenDrawer}
                tone="navy"
            >
                <SectionHeader animateOnVisible>
                    <SectionTitle>Archive</SectionTitle>
                    <SectionDescription>
                        경력 사이드 프로젝트와 기술 블로그를 모아둔 아카이브입니다.
                    </SectionDescription>
                </SectionHeader>

                <SectionBody animateOnVisible>
                    <ArchiveInteractive categories={ARCHIVE_DATA} />
                </SectionBody>
            </Section>
            <Footer open={isFooterOpen} onOpenChange={setIsFooterOpen} />
        </>
    );
}
