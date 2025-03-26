import { useAppStore } from "../../store/AppStore.ts";

export const Results = () => {
  const { count } = useAppStore();

  return (
    <>
      <div>
        <span>{count}</span>
      </div>
    </>
  );
};
