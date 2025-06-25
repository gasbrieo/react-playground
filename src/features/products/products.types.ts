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

export interface ProductsResponse {
  products: Product[];
  pagination: {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  };
}
