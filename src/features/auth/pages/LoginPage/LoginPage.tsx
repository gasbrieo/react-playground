import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { login } from "~/features/auth";
import { Route } from "~/routes/login";

export const LoginPage = () => {
  const search = Route.useSearch();

  const loginMutation = useMutation({
    mutationFn: useServerFn(login),
  });

  return (
    <div>
      <button
        onClick={() => {
          loginMutation.mutate({
            data: {
              email: "gaberabreu",
              password: "1231",
              redirectUrl: search.redirect,
            },
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
