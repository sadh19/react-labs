"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "@/src/store/Store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
