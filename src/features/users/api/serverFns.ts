import { createServerFn } from "@tanstack/react-start";

import { User } from "../types/users";

export const users: User[] = [
  {
    id: "USER-001",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    avatar: "",
    joinDate: "2024-01-15",
  },
  {
    id: "USER-002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Active",
    avatar: "",
    joinDate: "2024-01-20",
  },
  {
    id: "USER-003",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "Moderator",
    status: "Inactive",
    avatar: "",
    joinDate: "2024-01-10",
  },
  {
    id: "USER-004",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    role: "User",
    status: "Active",
    avatar: "",
    joinDate: "2024-02-05",
  },
  {
    id: "USER-005",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    role: "User",
    status: "Inactive",
    avatar: "",
    joinDate: "2024-01-25",
  },
  {
    id: "USER-006",
    name: "Diana Prince",
    email: "diana.prince@example.com",
    role: "Moderator",
    status: "Active",
    avatar: "",
    joinDate: "2024-02-10",
  },
  {
    id: "USER-007",
    name: "Edward Norton",
    email: "edward.norton@example.com",
    role: "User",
    status: "Active",
    avatar: "",
    joinDate: "2024-02-15",
  },
];

export const getUsers = createServerFn({ method: "GET" }).handler(async () => {
  const filteredUsers = [...users];
  return filteredUsers;
});
