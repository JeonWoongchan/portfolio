import {Section, SectionBody} from "@/src/components/Container";
import {FooterTitle, SectionDescription} from "@/src/components/Typography";
import {CollapsedBrand} from "@/src/components/header/Header";
import {Terminal} from "lucide-react";
import SectionActionButton from "@/src/components/common/SectionActionButton";

export default function Footer() {

    return (
        <Section
            sectionKey={"Footer"}
            tone="navyLight"
            className="min-h-0"
        >
            <SectionBody className="items-center text-center gap-2">
                <span className="p-2.5 items-center rounded-full border border-(--color-teal) bg-(--color-badge-bg)">
                    <Terminal className="h-7 w-7 text-(--color-accent) "/>
                </span>
                <FooterTitle>
                    함께 일하고 싶으신가요<span className="text-(--color-accent)">?</span>
                </FooterTitle>
                <SectionDescription>
                    다양한 경험을 통해 항상 발전하는
                </SectionDescription>
                <SectionActionButton>Contact Me</SectionActionButton>
                <div className="flex">

                </div>
            </SectionBody>
            <div className="flex justify-between">
                <div className="flex items-center font-mono">
                    <SectionDescription>2026</SectionDescription>
                    <CollapsedBrand/>
                </div>
            </div>
        </Section>
    );
}
