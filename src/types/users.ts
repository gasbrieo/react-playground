export const UserStatus = {
  ACTIVE: 'active',
  BLOCKED: 'blocked',
} as const;

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

export const UserRole = {
  ADMINISTRATOR: 'Administrator',
  EDITOR: 'Editor',
  VIEWER: 'Viewer',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  accountBalance: number;
  status: UserStatus;
  roles: UserRole[];
}
