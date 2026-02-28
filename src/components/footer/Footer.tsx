"use client";

import { useCallback } from "react";
import type { CSSProperties } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { SectionDescription } from "@/src/components/common/Typography";
import CopyEmailMetaItem from "@/src/components/footer/CopyEmailMetaItem";
import BrandSignature from "@/src/components/common/BrandSignature";
import SectionScrollAction from "@/src/components/common/SectionScrollAction";
import SocialStackLinks from "@/src/components/common/SocialStackLinks";
import { useSectionStore } from "@/src/store/useSectionStore";
import { SECTION_TONE_STYLE_MAP } from "@/src/utils/sectionTone";

interface FooterProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function Footer({ open, onOpenChange }: FooterProps) {
    const scrollTo = useSectionStore((state) => state.scrollTo);
    const footerSurfaceVars = SECTION_TONE_STYLE_MAP.navyLight.surfaceVars as CSSProperties;

    const handleBackToTop = useCallback(() => {
        onOpenChange(false);
        scrollTo("Hero");
    }, [onOpenChange, scrollTo]);

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent
                className="border-(--color-border) bg-(--color-navy-light) text-(--color-text)"
                style={footerSurfaceVars}
            >
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-6 pt-2 md:px-12">
                    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div className="w-full space-y-2">
                            <BrandSignature
                                className="gap-2"
                                nameClassName="text-sm font-semibold leading-relaxed text-white md:text-base"
                            />
                            <div className="flex gap-4">
                                <CopyEmailMetaItem
                                    email="jchan71589@gmail.com"
                                    textClassName="text-xs"
                                />
                            </div>
                        </div>
                        <SocialStackLinks className="self-end sm:self-auto" />
                    </div>
                    <div className="flex w-full items-end justify-between border-t border-(--color-border) pt-4">
                        <SectionDescription className="text-sm opacity-70">
                            2026 Jeon Woongchan. All rights reserved.
                        </SectionDescription>
                        <SectionScrollAction
                            direction="up"
                            variant="inline"
                            label="Back to top"
                            onAction={handleBackToTop}
                        />
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
