import { Slot } from "@radix-ui/react-slot";

import { cn } from "~/utils/cn";

import type { BreadcrumbLinkProps } from "./BreadcrumbLink.types";

export const BreadcrumbLink = ({ asChild, className, ...props }: BreadcrumbLinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp data-slot="breadcrumb-link" className={cn("hover:text-foreground transition-colors", className)} {...props} />
  );
};
