import type { SessionUser } from "./session";

export type UnauthenticatedState = {
  isAuthenticated: false;
  user?: undefined;
};

export type AuthenticatedState = {
  isAuthenticated: true;
  user: SessionUser;
};

export type AuthState = UnauthenticatedState | AuthenticatedState;
