"use client";
import { Provider as Providers } from "react-redux";
import { store } from "./store";

export default function Provider({ children }: any) {
  return <Providers store={store}>{children}</Providers>;
}
