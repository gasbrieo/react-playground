import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import { useAppForm } from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";

import { register } from "../api/serverFns";
import { RegisterSchema } from "../schemas/register";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const registerMutation = useMutation({
    mutationFn: useServerFn(register),
    onSuccess: () => {
      queryClient.resetQueries();
      navigate({ to: "/" });
    },
  });

  const form = useAppForm({
    validators: { onChange: RegisterSchema },
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ value }) => {
      await registerMutation.mutateAsync({ data: value });
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
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-muted-foreground text-sm text-balance">Enter your details below to create an account</p>
      </div>

      <div className="grid gap-6">
        <form.AppField name="name">
          {(field) => (
            <field.FormItem>
              <field.FormLabel>Name</field.FormLabel>
              <field.FormControl>
                <Input
                  type="text"
                  placeholder="John Doe"
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

        <form.AppField name="confirmPassword">
          {(field) => (
            <field.FormItem>
              <field.FormLabel>Confirm Password</field.FormLabel>
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
          <form.SubmitButton>Create account</form.SubmitButton>
        </form.AppForm>
      </div>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link className="underline-offset-4 hover:underline" to="/auth/login">
          Log in
        </Link>
      </div>
    </form>
  );
};
