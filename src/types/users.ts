export interface UserResponse {
  userId: string;
  email: string;
  roles: string[];
}

export interface ListUsersParams {
  page: number;
  pageSize: number;
}
