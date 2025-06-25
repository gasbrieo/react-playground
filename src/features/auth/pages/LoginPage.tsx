import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { login } from "../api/serverFns";

export const LoginPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: useServerFn(login),
    onSuccess: () => {
      queryClient.resetQueries();
      navigate({ to: "/" });
    },
  });

  return (
    <div>
      <button
        onClick={() =>
          loginMutation.mutateAsync({
            data: {
              email: "gaberabreu@gmail.com",
              password: "1231",
            },
          })
        }
      >
        Login
      </button>
    </div>
  );
};
