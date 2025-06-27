import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import { useAppForm } from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";

import { login } from "../api/serverFns";
import { LoginSchema } from "../schemas/login";

export const LoginForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: useServerFn(login),
    onSuccess: () => {
      queryClient.resetQueries();
      navigate({ to: "/dashboard" });
    },
  });

  const form = useAppForm({
    validators: { onChange: LoginSchema },
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await loginMutation.mutateAsync({ data: value });
    },
  });

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">Enter your email below to login to your account</p>
      </div>

      <div className="grid gap-6">
        <form.AppField name="email">
          {(field) => (
            <field.FormItem>
              <field.FormLabel>Email</field.FormLabel>
              <field.FormControl>
                <Input
                  type="email"
                  placeholder="m@example.com"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </field.FormControl>
              <field.FormMessage />
            </field.FormItem>
          )}
        </form.AppField>

        <form.AppField name="password">
          {(field) => (
            <field.FormItem>
              <field.FormLabel>Password</field.FormLabel>
              <field.FormControl>
                <Input
                  type="password"
                  placeholder="******"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </field.FormControl>
              <field.FormMessage />
            </field.FormItem>
          )}
        </form.AppField>

        <form.AppForm>
          <form.SubmitButton>Login</form.SubmitButton>
        </form.AppForm>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link className="underline-offset-4 hover:underline" to="/auth/register">
          Register
        </Link>
      </div>
    </form>
  );
};
