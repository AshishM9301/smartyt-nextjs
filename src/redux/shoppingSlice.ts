import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../type";

interface StoreState {
  productData: Products[];
  userInfo: null | string;
  orderData: [];
}

const initialState: StoreState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Products) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = shoppingSlice.actions;

export default shoppingSlice.reducer;
