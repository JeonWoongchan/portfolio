import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
    "p-4 text-card-foreground flex flex-col gap-2 rounded-lg border",
    {
        variants: {
            variant: {
                default: "bg-transparent border-(--color-border-light)",
                surface: "bg-(--surface-card) border-(--surface-card-border)",
            },
            interaction: {
                static: "",
                hoverable: "cursor-pointer hover:border-(--color-accent)",
            },
        },
        defaultVariants: {
            variant: "default",
            interaction: "static",
        },
    }
)

function Card({
    as: Comp = "div",
    className,
    variant = "default",
    interaction = "static",
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants> & {
    as?: React.ElementType
}) {
    return (
        <Comp
            data-slot="card"
            className={cn(cardVariants({ variant, interaction, className }))}
            {...props}
        />
    )
}

type CardLinkProps = React.ComponentProps<"a"> &
    VariantProps<typeof cardVariants> & {
        cardClassName?: string
    }

function CardLink({
    className,
    cardClassName,
    variant = "default",
    interaction = "hoverable",
    rel,
    target,
    children,
    ...props
}: CardLinkProps) {
    const resolvedRel = target === "_blank" ? (rel ?? "noopener noreferrer") : rel

    return (
        <a
            className={cn(
                "block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)",
                className
            )}
            rel={resolvedRel}
            target={target}
            {...props}
        >
            <Card variant={variant} interaction={interaction} className={cardClassName}>
                {children}
            </Card>
        </a>
    )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
                className
            )}
            {...props}
        />
    )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn("leading-none font-semibold", className)}
            {...props}
        />
    )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-muted-foreground text-sm", className)}
            {...props}
        />
    )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props}
        />
    )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("space-y-2", className)}
            {...props}
        />
    )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn("flex items-center [.border-t]:pt-6", className)}
            {...props}
        />
    )
}

export {
    Card,
    CardLink,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
    cardVariants,
}
