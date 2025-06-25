import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useAppSession } from "~/utils/session";

export const login = createServerFn({
  method: "POST",
})
  .validator(
    (d: { email: string; password: string; redirectUrl?: string }) => d
  )
  .handler(async ({ data }) => {
    const session = await useAppSession();

    await session.update({
      email: data.email,
    });

    console.log(data);

    throw redirect({
      href: data.redirectUrl || "/",
    });
  });
