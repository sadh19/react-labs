import "./App.css";
import { Dashboard } from "./components/dashboard/Dashboard.tsx";
import { Results } from "./components/results/Results.tsx";
import { Users } from "./components/users/Users.tsx";
import { useAppStore } from "./store/AppStore.ts";
import { useEffect } from "react";

function App() {
  const { fetchUsers } = useAppStore();

  useEffect(() => {
    void fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Dashboard />
      <Results />
      <Users />
    </>
  );
}

export default App;
