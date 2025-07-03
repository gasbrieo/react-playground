import { useSession } from "@tanstack/react-start/server";

import type { SessionUser } from "../types/session";

export const useAppSession = () => {
  return useSession<SessionUser>({
    password: process.env.SESSION_PASSWORD!,
  });
};
