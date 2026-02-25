import ARCHIVE_DATA from "@/data/archive";
import { GridContainer, Section, SectionBody, SectionHeader } from "@/src/components/Container";
import { SectionDescription, SectionTitle } from "@/src/components/Typography";
import ArchiveCountItem from "@/src/components/Archive/ArchiveCountItem";
import ArchiveGridCard from "@/src/components/Archive/ArchiveGridCard";
import type { ArchiveCardItem } from "@/src/types/archive";

export default function Archive() {
    const projectCount = ARCHIVE_DATA.projects.length;
    const blogPostCount = ARCHIVE_DATA.posts.length;
    const totalCount = projectCount + blogPostCount;

    const archiveItems: readonly ArchiveCardItem[] = [
        ...ARCHIVE_DATA.projects.map((item) => ({ ...item, type: "project" as const })),
        ...ARCHIVE_DATA.posts.map((item) => ({ ...item, type: "post" as const })),
    ];

    return (
        <Section sectionKey={"Archive"} nextSection={"Footer"} className={"bg-(--color-navy)"}>
            <SectionHeader animateOnVisible>
                <SectionTitle>Archive</SectionTitle>
                <SectionDescription>
                    경력 외 사이드 프로젝트와 기술 블로그를 모아둔 아카이브입니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody animateOnVisible>
                <ArchiveCountItem
                    projectCount={projectCount}
                    blogPostCount={blogPostCount}
                    totalCount={totalCount}
                />

                <GridContainer className="mx-auto mt-8 w-full max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
                    {archiveItems.map((item) => (
                        <li key={`${item.type}-${item.id}`} className="w-full">
                            <ArchiveGridCard item={item} />
                        </li>
                    ))}
                </GridContainer>
            </SectionBody>
        </Section>
    );
}
