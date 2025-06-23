export interface PagedList<T> {
  items: T[];
  pageNumber: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface UserResponse {
  userId: string;
  email: string;
  roles: string[];
}

export interface ListUsersParams {
  page: number;
  pageSize: number;
}
