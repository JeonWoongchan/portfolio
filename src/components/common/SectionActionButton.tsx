import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SectionActionButtonProps = ComponentProps<typeof Button>;

export default function SectionActionButton({
  className,
    variant = "navyLight",
  ...props
}: SectionActionButtonProps) {
  return (
    <Button
      variant={variant}
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  );
}
