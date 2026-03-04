"use client";

import { useCallback, useState } from "react";
import ARCHIVE_DATA from "@/data/archive";
import { Section, SectionBody, SectionHeader } from "@/src/components/common/Container";
import { SectionDescription, SectionTitle } from "@/src/components/common/Typography";
import ArchiveInteractive from "@/src/components/archive/ArchiveInteractive";
import Footer from "@/src/components/footer/Footer";
import { useFooterOverscrollTrigger } from "@/src/hooks/scroll/useFooterOverscrollTrigger";

export default function Archive() {
    const [isFooterOpen, setIsFooterOpen] = useState(false);

    const handleOpenDrawer = useCallback(() => {
        setIsFooterOpen(true);
    }, []);
    const handleCloseDrawer = useCallback(() => {
        setIsFooterOpen(false);
    }, []);

    useFooterOverscrollTrigger({
        isFooterOpen,
        onOpenFooter: handleOpenDrawer,
        onCloseFooter: handleCloseDrawer,
    });

    return (
        <>
            <Section
                sectionKey={"Archive"}
                onNextAction={handleOpenDrawer}
                tone="navy"
            >
                <SectionHeader>
                    <SectionTitle>Archive</SectionTitle>
                    <SectionDescription>
                        경력 사이드 프로젝트와 기술 블로그를 모아둔 아카이브입니다.
                    </SectionDescription>
                </SectionHeader>

                <SectionBody>
                    <ArchiveInteractive categories={ARCHIVE_DATA} />
                </SectionBody>
            </Section>
            <Footer open={isFooterOpen} onOpenChange={setIsFooterOpen} />
        </>
    );
}

