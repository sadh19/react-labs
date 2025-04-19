import { AppStates } from "@/src/store/slices/AppStates";
import { User } from "@/src/models/types/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: AppStates = {
  message: "Im Slice",
  users: [] as User[],
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setMessage: (state: AppStates, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setUsers: (state: AppStates, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export default appSlice.reducer;
