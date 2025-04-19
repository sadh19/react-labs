import { useDispatch, useSelector } from "react-redux";
import { StoreStates } from "@/src/store/StoreStates";
import { appSlice } from "./AppSlice";
import { User } from "@/src/models/types/User";

export const useAppSliceProvider = () => {
  const appStates = useSelector(({ app }: StoreStates) => app);
  const appActions = appSlice.actions;
  const dispatch = useDispatch();

  const updateMessage = (message: string) => {
    dispatch(appActions.setMessage(message));
  };

  const updateUsers = (users: User[]) => {
    dispatch(appActions.setUsers(users));
  };

  return { appStates, updateMessage, updateUsers };
};
