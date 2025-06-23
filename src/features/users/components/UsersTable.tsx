import type { UserResponse } from '@/types/api';

interface UsersTableProps {
  users: UserResponse[];
}

export const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.userId}>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
