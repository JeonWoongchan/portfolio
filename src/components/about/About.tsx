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
                    적극적으로 협업하며, 지속가능한 서비스를 개발합니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody className="space-y-4">
                <AboutContent />
            </SectionBody>
        </Section>
    );
}
