import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useAppSession } from "~/utils/session";
import { LoginSchema } from "../schemas/login";
import { AuthState } from "../types/auth";

export const login = createServerFn({
  method: "POST",
})
  .validator(LoginSchema)
  .handler(async ({ data }) => {
    const session = await useAppSession();

    await session.update({
      email: data.email,
    });
  });

export const logout = createServerFn().handler(async () => {
  const session = await useAppSession();

  session.clear();
});

export const getUser = createServerFn({
  method: "GET",
}).handler<AuthState>(async () => {
  const session = await useAppSession();

  if (!session.data.email) {
    return { isAuthenticated: false };
  }

  return {
    isAuthenticated: true,
    user: {
      email: session.data.email,
    },
  };
});
