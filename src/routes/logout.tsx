import { redirect, createFileRoute } from "@tanstack/react-router";
import { logout } from "~/features/auth";

export const Route = createFileRoute("/logout")({
  preload: false,
  loader: () => logout(),
});
