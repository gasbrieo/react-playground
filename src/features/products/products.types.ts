export type Product = {
  id: number;
  name: string;
};

export type ProductsFilters = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  name?: string;
  category?: string;
  status?: string;
};
