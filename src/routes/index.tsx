import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => (
    <div>
      Hello "/"! <Link to="/users">Users</Link>/
    </div>
  ),
});
