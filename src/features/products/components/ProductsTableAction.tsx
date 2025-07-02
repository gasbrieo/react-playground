import type { Row } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";

import { Button } from "~/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/DropdownMenu";

import type { Product } from "../types/products";

interface ProductsTableActionProps {
  row: Row<Product>;
}

export const ProductsTableAction = ({ row }: ProductsTableActionProps) => {
  const product = row.original;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <MoreHorizontalIcon />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.id)}>Copy product ID</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
