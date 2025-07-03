import { GavelIcon, ShieldCheckIcon, User2Icon } from "lucide-react";

export const ProductStatus = [
  {
    label: "In Stock",
    value: "in_stock",
    icon: ShieldCheckIcon,
  },
  {
    label: "Low Stock",
    value: "low_stock",
    icon: User2Icon,
  },
  {
    label: "Out of Stock",
    value: "out_of_stock",
    icon: GavelIcon,
  },
];

export type ProductStatus = (typeof ProductStatus)[number]["value"];

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: ProductStatus;
  createdAt: string;
};
