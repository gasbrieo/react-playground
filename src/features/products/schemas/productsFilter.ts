import z from "zod";

export const ProductsFilterSchema = z.object({
  page: z.number().default(0),
  pageSize: z.number().default(5),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).optional(),
  filters: z
    .object({
      name: z.string().optional(),
      category: z.string().optional(),
      status: z.string().optional(),
    })
    .optional(),
});

export type ProductsFilterSchema = z.infer<typeof ProductsFilterSchema>;
