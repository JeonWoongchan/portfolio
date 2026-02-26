import ARCHIVE_DATA from "@/data/archive";
import { Section, SectionBody, SectionHeader } from "@/src/components/Container";
import { SectionDescription, SectionTitle } from "@/src/components/Typography";
import ArchiveInteractive from "@/src/components/archive/ArchiveInteractive";

export default function Archive() {
    return (
        <Section sectionKey={"Archive"} className={"bg-(--color-navy)"}>
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
    );
}
