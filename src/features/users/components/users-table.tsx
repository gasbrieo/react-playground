import type { UserResponse } from '@/types/users';

interface UsersTableProps {
  users: UserResponse[];
}

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.userId}>
          {user.email} - Roles: {user.roles.join(', ')}
        </li>
      ))}
    </ul>
  );
};
