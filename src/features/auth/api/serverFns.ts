import { createServerFn } from "@tanstack/react-start";

import { useAppSession } from "~/features/auth/utils/session";

import { LoginSchema } from "../schemas/login";

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

export const logout = createServerFn({
  method: "POST",
}).handler(async () => {
  const session = await useAppSession();

  session.clear();
});

export const getAuthState = createServerFn({
  method: "GET",
}).handler(async () => {
  const session = await useAppSession();

  if (!session.data.email) {
    return { isAuthenticated: false };
  }

  return {
    isAuthenticated: true,
    user: session.data,
  };
});
