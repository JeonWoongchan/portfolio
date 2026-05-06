import Image from "next/image";
import type { ReactNode } from "react";
import { ExternalLink, Github, Radio, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import LIVE_SERVICE_DATA from "@/data/liveService";
import { Section, SectionBody, SectionHeader } from "@/src/components/common/Container";
import { SectionDescription, SectionTitle } from "@/src/components/common/Typography";
import IconBadge from "@/src/components/common/IconBadge";
import SectionActionButton from "@/src/components/common/SectionActionButton";
import StackCardList from "@/src/components/common/StackCardList";
import type { LiveServiceDetailItem, LiveServiceLink, LiveServiceMetric } from "@/src/types/liveService";

const SERVICE_LINK_BUTTON_CLASS =
    "border border-(--surface-card-border) bg-(--color-navy) !text-(--surface-button-text) hover:bg-(--color-accent) hover:!text-(--color-black)";
const CAROUSEL_NAV_BUTTON_CLASS =
    "static size-7 translate-y-0 border border-(--surface-card-border) bg-(--color-overlay-light) text-(--color-text-heading) backdrop-blur-md hover:border-(--color-highlight-border) hover:bg-(--color-accent) hover:text-(--color-black)";

export default function LiveService() {
    return (
        <Section
            sectionKey="LiveService"
            nextSection="Career"
            tone="navyLight"
            visibilityThreshold={0.15}
        >
            <SectionHeader>
                <SectionTitle>Service</SectionTitle>
                <SectionDescription className="text-center">
                    기능 구현을 넘어 서비스 경험까지 고민하며
                    실제 서비스로 구현했습니다.
                </SectionDescription>
            </SectionHeader>

            <SectionBody className="mx-auto w-full max-w-7xl justify-start overflow-visible pt-2 lg:pt-4">
                <div className="grid w-full gap-6">
                    <div className="grid w-full items-stretch gap-6 lg:auto-rows-fr lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]">
                        <ServicePreview />
                        <ServiceOverview />
                    </div>
                    <ServiceDetails />
                </div>
            </SectionBody>
        </Section>
    );
}

function ServicePreview() {
    const { images, status, name, metrics } = LIVE_SERVICE_DATA;

    return (
        <div className="flex h-full w-full flex-col">
            <Card variant="surface" className="flex min-h-0 flex-1 flex-col gap-0 overflow-hidden rounded-lg p-0 shadow-(--shadow-surface-elevated)">
                <div className="flex items-center justify-between border-b border-(--surface-card-border) px-4 py-3">
                    <StatusBadge label={status} />
                    <span className="text-xs text-(--color-text-caption)">{name}</span>
                </div>

                <Carousel
                    opts={{ loop: true }}
                    className="relative flex min-h-0 flex-1 flex-col **:data-[slot=carousel-content]:h-full [&_[data-slot=carousel-content]>div]:h-full"
                >
                    <CarouselContent className="ml-0">
                        {images.map((image) => (
                            <CarouselItem key={image.src} className="h-full pl-0">
                                <div className="relative h-full min-h-48 w-full bg-(--color-navy) lg:min-h-105 lg:max-h-125">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(min-width: 1024px) 54vw, 100vw"
                                        className="object-cover object-top"
                                        priority={false}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-(--color-overlay-light) px-4 py-3">
                                        <p className="text-xs font-semibold text-(--color-text-heading)">{image.title}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute right-3 bottom-3 z-1 flex gap-2">
                        <CarouselPrevious className={CAROUSEL_NAV_BUTTON_CLASS} />
                        <CarouselNext className={CAROUSEL_NAV_BUTTON_CLASS} />
                    </div>
                </Carousel>
            </Card>

            <MetricList metrics={metrics} />
        </div>
    );
}

function ServiceOverview() {
    const {
        name,
        status,
        summary,
        description,
        links,
        stack,
        features,
    } = LIVE_SERVICE_DATA;

    return (
        <div className="flex h-full w-full flex-col gap-4 text-left lg:justify-between">
            <div className="space-y-3">
                <div className="flex flex-wrap items-start gap-3">
                    <h3 className="text-2xl font-bold leading-none text-(--color-accent) md:text-3xl">{name}</h3>
                    <span className="rounded-md border border-(--color-highlight-border) bg-(--color-highlight-soft) px-2 py-1 text-xs font-semibold text-(--color-green)">
                        {status}
                    </span>
                </div>
                <p className="text-sm leading-relaxed text-(--color-text-primary) md:text-base">{summary}</p>
                <p className="text-sm leading-relaxed text-(--color-text-content)">{description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {links.map((link) => (
                    <ServiceLinkButton key={link.href} link={link} />
                ))}
            </div>

            <StackCardList stackNames={stack} keyPrefix="live-service-stack" compact />

            <section className="space-y-3">
                <h4 className="text-sm font-semibold text-(--color-text-heading)">핵심 기능</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                    {features.map((feature) => (
                        <InfoTile key={feature.title} item={feature} as="li" />
                    ))}
                </ul>
            </section>
        </div>
    );
}

function ServiceDetails() {
    const {
        architecture,
        recommendation,
        highlights,
    } = LIVE_SERVICE_DATA;

    return (
        <Accordion
            type="single"
            collapsible
            className="w-full rounded-lg border border-(--surface-card-border) bg-(--surface-card)"
        >
            <AccordionItem value="details" className="border-(--surface-card-border) px-4">
                <AccordionTrigger className="w-full py-3 text-(--color-text-heading) hover:no-underline">
                    상세 정보
                </AccordionTrigger>
                <AccordionContent>
                    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
                        <DetailPanel
                            title="Architecture"
                            className="p-3"
                        >
                            <ol className="mt-3 grid flex-1 gap-2">
                                {architecture.map((step, index) => (
                                    <li key={step.title} className="relative grid grid-cols-[1rem_minmax(0,1fr)] gap-3">
                                        <span
                                            className={cn(
                                                "relative mt-1.5 flex justify-center",
                                                index < architecture.length - 1 &&
                                                    "after:absolute after:top-3 after:h-[calc(100%+0.5rem)] after:w-px after:bg-(--surface-card-border)"
                                            )}
                                        >
                                            <span className="size-2 rounded-full bg-(--color-accent)" />
                                        </span>
                                        <InfoTile item={step} className="px-3 py-2" />
                                    </li>
                                ))}
                            </ol>
                        </DetailPanel>

                        <div className="grid h-full gap-4">
                            <DetailPanel
                                title="Recommendation System"
                            >
                                <ol className="mt-4 grid gap-2 sm:grid-cols-4">
                                    {recommendation.stages.map((stage, index) => (
                                        <RecommendationStageCard key={stage.title} item={stage} index={index} />
                                    ))}
                                </ol>
                            </DetailPanel>

                            <DetailPanel title="Operations">
                                <IconTextList className="mt-3" icon={ShieldCheck} items={highlights} />
                            </DetailPanel>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

function StatusBadge({ label }: { label: string }) {
    return (
        <span className="flex items-center gap-2">
            <IconBadge
                icon={Radio}
                tone="green"
                className="size-6 rounded-md"
                iconClassName="size-3.5"
            />
            <span className="text-xs font-semibold text-(--color-green)">{label}</span>
        </span>
    );
}

function MetricList({ metrics }: { metrics: readonly LiveServiceMetric[] }) {
    return (
        <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
                <Card key={metric.label} variant="surface" className="rounded-md px-4 py-3">
                    <dt className="text-xs text-(--color-text-caption)">{metric.label}</dt>
                    {metric.stackNames ? (
                        <dd className="mt-2">
                            <span className="sr-only">{metric.value}</span>
                            <StackCardList
                                stackNames={metric.stackNames}
                                keyPrefix={`live-service-metric-${metric.label}`}
                                compact
                                className="gap-3"
                            />
                        </dd>
                    ) : (
                        <dd className="mt-1 text-sm font-semibold text-(--color-text-heading)">{metric.value}</dd>
                    )}
                </Card>
            ))}
        </dl>
    );
}

function ServiceLinkButton({ link }: { link: LiveServiceLink }) {
    const Icon = link.label === "GitHub" ? Github : ExternalLink;

    return (
        <SectionActionButton
            asChild
            size="sm"
            className={SERVICE_LINK_BUTTON_CLASS}
        >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
                <Icon aria-hidden="true" />
                {link.label}
            </a>
        </SectionActionButton>
    );
}

function InfoTile({
    item,
    as: Component = "span",
    className,
}: {
    item: LiveServiceDetailItem;
    as?: "li" | "span";
    className?: string;
}) {
    return (
        <Card
            as={Component}
            variant="surface"
            className={cn("rounded-md p-3", className)}
        >
            <span className="block text-sm font-semibold text-(--color-text-heading)">{item.title}</span>
            <span className="mt-1 block text-xs leading-relaxed text-(--color-text-content)">
                {item.description}
            </span>
        </Card>
    );
}

function RecommendationStageCard({
    item,
    index,
}: {
    item: LiveServiceDetailItem;
    index: number;
}) {
    return (
        <Card as="li" variant="surface" className="rounded-md p-3">
            <span className="text-xs font-semibold text-(--color-accent)">
                0{index + 1}
            </span>
            <span className="mt-2 block text-sm font-semibold text-(--color-text-heading)">{item.title}</span>
            <span className="mt-1 block text-xs leading-relaxed text-(--color-text-content)">
                {item.description}
            </span>
        </Card>
    );
}

function DetailPanel({
    title,
    description,
    children,
    className,
}: {
    title: string;
    description?: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <Card
            as="section"
            variant="surface"
            className={cn("h-full rounded-md p-4", className)}
        >
            <div className="space-y-1">
                <h4 className="text-sm font-semibold text-(--color-text-heading)">{title}</h4>
                {description && (
                    <p className="text-xs leading-relaxed text-(--color-text-content)">
                        {description}
                    </p>
                )}
            </div>
            {children}
        </Card>
    );
}

function IconTextList({
    items,
    icon: Icon,
    className,
}: {
    items: readonly string[];
    icon: LucideIcon;
    className?: string;
}) {
    return (
        <ul className={cn("grid gap-2", className)}>
            {items.map((item) => (
                <li key={item} className="flex gap-2 text-xs leading-relaxed text-(--color-text-content)">
                    <Icon className="mt-0.5 size-4 shrink-0 text-(--color-green)" aria-hidden="true" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
