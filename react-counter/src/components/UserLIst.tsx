import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError("Failed to fetch users");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();

    // 🔥 cleanup
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} — {user.email}
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
