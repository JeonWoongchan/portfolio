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
                    깊이 있는 고민을 바탕으로 더 나은 해답을 찾아갑니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody className="space-y-4">
                <AboutContent />
            </SectionBody>
        </Section>
    );
}
