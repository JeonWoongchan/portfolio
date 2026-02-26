import ARCHIVE_DATA from "@/data/archive";
import { Section, SectionBody, SectionHeader } from "@/src/components/Container";
import { SectionDescription, SectionTitle } from "@/src/components/Typography";
import ArchiveInteractive from "@/src/components/Archive/ArchiveInteractive";
import type { ArchiveCardItem } from "@/src/types/archive";

export default function Archive() {
    const projectItems: readonly ArchiveCardItem[] = ARCHIVE_DATA.projects.map((item) => ({
        ...item,
        type: "project" as const,
    }));
    const postItems: readonly ArchiveCardItem[] = ARCHIVE_DATA.posts.map((item) => ({
        ...item,
        type: "post" as const,
    }));

    return (
        <Section sectionKey={"Archive"} nextSection={"Footer"} className={"bg-(--color-navy)"}>
            <SectionHeader animateOnVisible>
                <SectionTitle>Archive</SectionTitle>
                <SectionDescription>
                    경력 외 사이드 프로젝트와 기술 블로그를 모아둔 아카이브입니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody animateOnVisible>
                <ArchiveInteractive
                    projectItems={projectItems}
                    postItems={postItems}
                />
            </SectionBody>
        </Section>
    );
}
