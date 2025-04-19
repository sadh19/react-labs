import { AppRoutes } from "@/src/models/enums/AppRoutes";
import Link from "next/link";
import { UserService } from "@/app/users/services/UserService";
import UserList from "@/app/users/components/UserList";

export default async function Users() {
  const users = await UserService.fetchUsers();

  return (
    <>
      <span>Soy users 1</span>
      <span>{users.length}</span>
      <div>
        {users.map((user) => (
          <div key={user.id} className="flex">
            <div>{user.id}</div>
            <div>{user.email}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
          </div>
        ))}
      </div>
      <UserList />
      <div className="my-8">
        <Link href={AppRoutes.LOGIN} className="p-4 bg-red-500">
          Go to login
        </Link>
      </div>
    </>
  );
}
