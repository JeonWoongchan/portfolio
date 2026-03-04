import {
    Section,
    SectionBody,
    SectionHeader,
} from "@/src/components/common/Container";
import {
    SectionDescription,
    SectionTitle,
} from "@/src/components/common/Typography";
import AboutContent from "@/src/components/about/AboutContent";

export default function About() {
    return (
        <Section
            sectionKey={"About"}
            nextSection={"Skills"}
            tone="navyLight"
        >
            <SectionHeader>
                <SectionTitle>About Me</SectionTitle>
                <SectionDescription>
                    이러한 개발 방식을 바탕으로 꾸준히 성장하고 있습니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody className="space-y-4">
                <AboutContent />
            </SectionBody>
        </Section>
    );
}
