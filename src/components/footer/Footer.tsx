import {Section, SectionBody} from "@/src/components/Container";
import {SectionDescription} from "@/src/components/Typography";
import StackCard from "@/src/components/common/StackCard";
import CopyEmailMetaItem from "@/src/components/footer/CopyEmailMetaItem";
import BrandSignature from "@/src/components/common/BrandSignature";
import SectionScrollAction from "@/src/components/common/SectionScrollAction";

export default function Footer() {
    return (
        <Section
            sectionKey={"Footer"}
            tone="navyLight"
            className="min-h-0 py-6"
        >
            <SectionBody className="space-y-6">
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2 w-full">
                        <BrandSignature
                            className="gap-2"
                            nameClassName="text-sm font-semibold leading-relaxed text-white md:text-base"
                        />
                        <div className="flex gap-4">
                            <CopyEmailMetaItem email="jchan71589@gmail.com" textClassName="text-xs" />
                        </div>
                    </div>
                    <div className="flex gap-2 self-end sm:self-auto">
                        <StackCard
                            stackName={'GitHub'}
                            compact={true}
                            imageClassName="bg-white rounded-sm cursor-pointer"
                            tooltipSide="top"
                        />
                        <StackCard
                            stackName={'Velog'}
                            compact={true}
                            imageClassName="cursor-pointer"
                            tooltipSide="top"
                        />
                    </div>
                </div>
                <div className="flex w-full items-end justify-between border-t border-(--color-border) pt-4">
                    <SectionDescription className="text-sm opacity-70">2026 Jeon Woongchan. All rights reserved.</SectionDescription>
                    <SectionScrollAction target="Hero" direction="up" variant="inline" />
                </div>
            </SectionBody>
        </Section>
    );
}
