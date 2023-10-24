"use client";

import { getProduct, getProducts } from "@/app/services/productAPI";
import {
  PayloadAction,
  createSlice,
  createAsyncThunk,
  AnyAction,
} from "@reduxjs/toolkit";

export interface ProductType {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: any;
  categories: any;
  implementationEffortText: any;
  investmentEffort: string;
  trl: any;
  video: string;
  user: any;
  company: any;
  businessModels: Array<any>;
}
export interface ProductState {
  products: Array<ProductType>;
  status: string;
  error: any;
}

const initialState: ProductState = {
  products: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getProduct(6781);
    console.log(response);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    },
    edit: (state, action: PayloadAction<ProductType>) => {
      const index = state.products.findIndex(
        (product) => action.payload.id == product.id
      );
      state.products[index] = action.payload;
    },
    remove: (state, action: PayloadAction<ProductType>) => {
      const product = state.products.find(
        (product) => action.payload.id == product.id
      );
      if (product)
        state.products = state.products.filter((p) => p.id !== product.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { add, edit, remove } = productSlice.actions;

export default productSlice.reducer;
