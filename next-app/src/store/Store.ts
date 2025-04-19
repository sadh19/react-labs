import { configureStore } from "@reduxjs/toolkit";
import { StoreStates } from "@/src/store/StoreStates";
import appSlice from "@/src/store/slices/AppSlice";

export default configureStore<StoreStates>({
  reducer: {
    app: appSlice,
  },
});
