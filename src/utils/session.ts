import { useSession } from "@tanstack/react-start/server";

type SessionUser = {
  id: string;
  email: string;
};

export function useAppSession() {
  return useSession<SessionUser>({
    password: "ChangeThisBeforeShippingToProdOrYouWillBeFired",
  });
}
