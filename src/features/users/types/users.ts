import { CheckCircleIcon, CircleOffIcon, GavelIcon, ShieldCheckIcon, User2Icon } from "lucide-react";

export const UserRole = [
  {
    label: "Admin",
    value: "admin",
    icon: ShieldCheckIcon,
  },
  {
    label: "User",
    value: "user",
    icon: User2Icon,
  },
  {
    label: "Moderator",
    value: "moderator",
    icon: GavelIcon,
  },
];

export type UserRole = (typeof UserRole)[number]["value"];

export const UserStatus = [
  { label: "Active", value: "active", icon: CheckCircleIcon },
  { label: "Inactive", value: "inactive", icon: CircleOffIcon },
];

export type UserStatus = (typeof UserStatus)[number]["value"];

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  avatar: string;
  joinDate: string;
};
