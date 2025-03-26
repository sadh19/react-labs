import { create } from "zustand";
import { combine } from "zustand/middleware";
import { User } from "../models/User.ts";

interface AppStoreState {
  users: User[];
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  increaseDouble: () => void;
  decreaseDouble: () => void;
  fetchUsers: () => Promise<void>;
}

export const useAppStore = create<AppStoreState>(
  combine({ count: 0, users: [] as User[] }, (set, get) => ({
    increaseCount: () => set((state) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state) => ({ count: state.count - 1 })),
    increaseDouble: () => set({ count: get().count + 2 }),
    decreaseDouble: () => set({ count: get().count - 2 }),
    fetchUsers: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      set({ users: data });
    },
  })),
);
