// app/redux-provider.jsx
"use client";

import { Provider } from "react-redux";
import {store}  from "./Store/store";
import { hydrateCart } from "@/app/Store/cartSlice";
import { loadCart } from "@/app/Store/storage";
import { useEffect } from "react";

export default function ReduxProvider({ children }) {
  useEffect(() => {
    // we are already inside the client, and the store exists
    store.dispatch(hydrateCart(loadCart()));
  }, []);

  return <Provider store={store}>{children}</Provider>;
}