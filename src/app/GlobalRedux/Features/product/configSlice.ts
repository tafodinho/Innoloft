import { getConfig, getProducts } from "@/app/services/productAPI";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface configType {
  id: number;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}

export interface configState {
  config: configType;
  status: string;
  error: any;
}

const initialState: configState = {
  config: {
    id: 1,
    logo: "https://img.innoloft.com/logo.svg",
    mainColor: "#272e71",
    hasUserSection: true,
  },
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed',
  error: null,
};

export const fetchConfig = createAsyncThunk("config/fetchConfig", async () => {
  const response = await getConfig(parseInt(process.env.NEXT_PUBLIC_APP_ID));
  return response.data;
});

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConfig.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchConfig.fulfilled, (state, action) => {
        state.config = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchConfig.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default configSlice.reducer;
