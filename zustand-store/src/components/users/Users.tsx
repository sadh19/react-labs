import { useAppStore } from "../../store/AppStore.ts";

export const Users = () => {
  const { users } = useAppStore();

  return (
    <div>
      <span>Users: {users.length}</span>

      <div>
        <div>id</div>
        <div>Name</div>
        <div>Username</div>
        <div>Email</div>
      </div>

      {users.map((user) => (
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px" }}>{user.id}</div>
          <div style={{ marginRight: "10px" }}>{user.name}</div>
          <div style={{ marginRight: "10px" }}>{user.username}</div>
          <div style={{ marginRight: "10px" }}>{user.email.toLowerCase()}</div>
        </div>
      ))}
    </div>
  );
};
