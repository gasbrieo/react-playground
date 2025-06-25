import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useAppSession } from "~/utils/session";

export const logout = createServerFn().handler(async () => {
  const session = await useAppSession();

  session.clear();

  throw redirect({
    href: "/",
  });
});
