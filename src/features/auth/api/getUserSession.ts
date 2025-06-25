import { createServerFn } from "@tanstack/react-start";
import { useAppSession } from "~/utils/session";

export const getUserSession = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await useAppSession();

    if (!session.data.email) {
      return null;
    }

    return {
      email: session.data.email,
    };
  }
);
