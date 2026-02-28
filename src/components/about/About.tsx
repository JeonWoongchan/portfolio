import {
    Section,
    SectionBody,
    SectionHeader,
} from "@/src/components/common/Container";
import {
    SectionDescription,
    SectionTitle,
} from "@/src/components/common/Typography";
import AboutInfoGrid from "@/src/components/about/AboutInfoGrid";
import AboutProfileCard from "@/src/components/about/AboutProfileCard";
import AboutQuoteCard from "@/src/components/about/AboutQuoteCard";

export default function About() {
    return (
        <Section
            sectionKey={"About"}
            nextSection={"Skills"}
            tone="navyLight"
        >
            <SectionHeader animateOnVisible>
                <SectionTitle>About Me</SectionTitle>
                <SectionDescription>
                    적극적으로 협업하며, 지속가능한 서비스를 개발합니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody animateOnVisible className="space-y-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
                    <div className="lg:basis-1/4">
                        <AboutProfileCard />
                    </div>
                    <div className="min-w-0 lg:basis-3/4">
                        <AboutInfoGrid />
                    </div>
                </div>
                <AboutQuoteCard />
            </SectionBody>
        </Section>
    );
}
