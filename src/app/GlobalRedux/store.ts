"use client";

import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./Features/product/productSlice";
import configReducer from "./Features/product/configSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    configuration: configReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
