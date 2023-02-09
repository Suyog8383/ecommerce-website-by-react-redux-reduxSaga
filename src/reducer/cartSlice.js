import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  cartProducts22: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
  isFetching: false,
};
export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.isFetching = true;
    },
    getProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.cartProducts = action.payload.result;
    },
    getProductsFailed: (state) => {
      state.isFetching = false;
      state.cartProducts = [];
    },

    AddCart: (state, action) => {
      const find = state.cartProducts22.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cartProducts22[find].quantity += 1;
        state.cartProducts22[find].subTotal +=
          state.cartProducts22[find].quantity *
          state.cartProducts22[find].price;
      } else {
        const tempVar = { ...action.payload };
        tempVar.quantity = 1;
        tempVar.subTotal = tempVar.price;
        state.cartProducts22.push(tempVar);
      }
    },
    clearCart: (state) => {
      state.cartProducts22 = [];
    },

    increment: (state, action) => {
      const find = state.cartProducts22.findIndex(
        (item) => item.id === action.payload.id
      );
      let temp = state.cartProducts22[find];
      temp.quantity += 1;
      temp.subTotal += temp.price;
    },

    decrement: (state, action) => {
      const find = state.cartProducts22.findIndex(
        (item) => item.id === action.payload.id
      );
      let temp = state.cartProducts22[find];
      temp.quantity -= 1;
      temp.subTotal -= temp.price;
    },
    clearItem: (state, action) => {
      const find = state.cartProducts22.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartProducts22.splice(find, 1);
    },
    getCartTotalandQuantity: (state) => {
      let total = 0;
      let quantity = 0;
      for (let item of state.cartProducts22) {
        total += item.subTotal;
        quantity += item.quantity;
      }
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const {
  getProducts,
  getProductsSuccess,
  getProductsFailed,
  AddCart,
  clearCart,
  clearItem,
  increment,
  decrement,
  getCartTotalandQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
