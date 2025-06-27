import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => {
  return (
    <div className="p-4">
      <h3>Welcome Home!!!</h3>
    </div>
  );
};

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});
