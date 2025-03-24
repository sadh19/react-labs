import { observer } from "mobx-react-lite";
import { AppStore } from "../../store/AppStore";

export const Users = observer(({ counter }: { counter: AppStore }) => {
  return (
    <div>
      <span>Users: {counter.users.length}</span>

      <div>
        <div>id</div>
        <div>Name</div>
        <div>Username</div>
        <div>Email</div>
      </div>

      {counter.users.map((user) => (
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px" }}>{user.id}</div>
          <div style={{ marginRight: "10px" }}>{user.name}</div>
          <div style={{ marginRight: "10px" }}>{user.username}</div>
          <div style={{ marginRight: "10px" }}>{user.email.toLowerCase()}</div>
        </div>
      ))}

    </div>
  )
});
