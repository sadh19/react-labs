import { useAppStore } from "../../store/AppStore.ts";

export const Dashboard = () => {
  const { increaseCount, increaseDouble, decreaseCount, decreaseDouble } =
    useAppStore();

  return (
    <>
      <div>
        <button onClick={() => increaseCount()}>Increase</button>
        <button onClick={() => increaseDouble()}>Increase double</button>
        <button onClick={() => decreaseCount()}>Decrease</button>
        <button onClick={() => decreaseDouble()}>Decrease double</button>
      </div>
    </>
  );
};
