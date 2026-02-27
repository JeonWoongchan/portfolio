"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import CareerMetaItem from "@/src/components/career/CareerMetaItem";

interface CopyEmailMetaItemProps {
    email: string;
    textClassName?: string;
    className?: string;
}

const COPIED_RESET_DELAY_MS = 1600;

export default function CopyEmailMetaItem({
    email,
    textClassName,
    className,
}: CopyEmailMetaItemProps) {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (!isCopied) {
            return;
        }

        const timer = window.setTimeout(() => {
            setIsCopied(false);
        }, COPIED_RESET_DELAY_MS);

        return () => {
            window.clearTimeout(timer);
        };
    }, [isCopied]);

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setIsCopied(true);
        } catch {
            setIsCopied(false);
        }
    };

    return (
        <div className={cn("flex items-center gap-2", className)}>
            <CareerMetaItem icon={Mail} text={email} textClassName={textClassName} />
            <button
                type="button"
                onClick={handleCopyClick}
                className={cn(
                    "inline-flex items-center gap-1 text-xs transition-colors cursor-pointer",
                    isCopied
                        ? "text-(--color-accent)"
                        : "text-(--color-text-muted) hover:text-(--color-accent)"
                )}
                aria-live="polite"
            >
                {isCopied ? <Check className="size-3" aria-hidden="true" /> : <Copy className="size-3" aria-hidden="true" />}
                <span>{isCopied ? "copyed!" : "Click to copy"}</span>
            </button>
        </div>
    );
}
