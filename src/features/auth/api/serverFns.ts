import { createServerFn } from "@tanstack/react-start";

import { useAppSession } from "~/features/auth/utils/session";

import { LoginSchema } from "../schemas/login";
import { RegisterSchema } from "../schemas/register";

export const register = createServerFn({
  method: "POST",
})
  .validator(RegisterSchema)
  .handler(async ({ data }) => {
    const session = await useAppSession();

    const name = data.email.split("@")[0];

    await session.update({
      name: name,
      email: data.email,
      avatar: `https://ui-avatars.com/api/?name=${name}&size=128&background=0D8ABC&color=fff`,
    });
  });

export const login = createServerFn({
  method: "POST",
})
  .validator(LoginSchema)
  .handler(async ({ data }) => {
    const session = await useAppSession();

    const name = data.email.split("@")[0];

    await session.update({
      name: name,
      email: data.email,
      avatar: `https://ui-avatars.com/api/?name=${name}&size=128&background=0D8ABC&color=fff`,
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
