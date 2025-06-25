export type AuthState =
  | { isAuthenticated: false }
  | { isAuthenticated: true; user: User };

export type User = { email: string };
