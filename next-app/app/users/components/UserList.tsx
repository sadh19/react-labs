"use client";
import { useEffect, useState } from "react";
import { useAppSliceProvider } from "@/src/store/slices/useAppSliceProvider";
import { UserService } from "@/app/users/services/UserService";
import { User } from "@/src/models/types/User";

export default function UserList() {
  const { appStates } = useAppSliceProvider();

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.fetchUsers().then((resp) => {
      setUsers(resp);
    });
  }, []);

  return (
    <>
      <span>Soy users 2</span>
      <div>
        <span>{appStates.message}</span>
      </div>

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
    </>
  );
}
