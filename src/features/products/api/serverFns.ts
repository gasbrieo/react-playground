import { createServerFn } from "@tanstack/react-start";

import { ProductsFilterSchema } from "../schemas/productsFilter";
import { Product } from "../types/products";

export const products: Product[] = [
  {
    id: "PROD-001",
    name: "Premium Headphones",
    category: "Electronics",
    price: 199.99,
    stock: 45,
    status: "in_stock",
    createdAt: "2023-01-15T08:00:00.000Z",
  },
  {
    id: "PROD-002",
    name: "Wireless Mouse",
    category: "Computer Accessories",
    price: 49.99,
    stock: 120,
    status: "in_stock",
    createdAt: "2023-02-20T10:30:00.000Z",
  },
  {
    id: "PROD-003",
    name: "Mechanical Keyboard",
    category: "Computer Accessories",
    price: 129.99,
    stock: 8,
    status: "low_stock",
    createdAt: "2023-03-05T14:15:00.000Z",
  },
  {
    id: "PROD-004",
    name: "27-inch Monitor",
    category: "Electronics",
    price: 299.99,
    stock: 0,
    status: "out_of_stock",
    createdAt: "2023-01-30T09:45:00.000Z",
  },
  {
    id: "PROD-005",
    name: "Wireless Earbuds",
    category: "Audio",
    price: 89.99,
    stock: 35,
    status: "in_stock",
    createdAt: "2023-04-10T11:20:00.000Z",
  },
  {
    id: "PROD-006",
    name: "USB-C Docking Station",
    category: "Computer Accessories",
    price: 149.99,
    stock: 18,
    status: "in_stock",
    createdAt: "2023-02-08T16:30:00.000Z",
  },
  {
    id: "PROD-007",
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 79.99,
    stock: 3,
    status: "low_stock",
    createdAt: "2023-03-22T13:10:00.000Z",
  },
  {
    id: "PROD-008",
    name: "Ergonomic Chair",
    category: "Office Furniture",
    price: 249.99,
    stock: 12,
    status: "in_stock",
    createdAt: "2023-01-18T10:00:00.000Z",
  },
  {
    id: "PROD-009",
    name: "Adjustable Desk",
    category: "Office Furniture",
    price: 399.99,
    stock: 0,
    status: "out_of_stock",
    createdAt: "2023-02-25T09:15:00.000Z",
  },
  {
    id: "PROD-010",
    name: "Wireless Charger",
    category: "Electronics",
    price: 39.99,
    stock: 50,
    status: "in_stock",
    createdAt: "2023-04-05T15:45:00.000Z",
  },
  {
    id: "PROD-011",
    name: "External SSD 1TB",
    category: "Storage",
    price: 159.99,
    stock: 25,
    status: "in_stock",
    createdAt: "2023-03-12T12:30:00.000Z",
  },
  {
    id: "PROD-012",
    name: "Webcam HD",
    category: "Computer Accessories",
    price: 69.99,
    stock: 5,
    status: "low_stock",
    createdAt: "2023-01-28T14:00:00.000Z",
  },
];

export const getProducts = createServerFn({ method: "GET" })
  .validator(ProductsFilterSchema)
  .handler(async ({ data }) => {
    const { page, pageSize } = data;

    const filteredProducts = [...products];

    const totalCount = filteredProducts.length;
    const totalPages = Math.ceil(totalCount / pageSize);
    const paginatedProducts = filteredProducts.slice(page * pageSize, (page + 1) * pageSize);

    return {
      products: paginatedProducts,
      pagination: {
        page,
        pageSize,
        totalCount,
        totalPages,
      },
    };
  });
