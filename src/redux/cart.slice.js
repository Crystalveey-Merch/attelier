/* eslint-disable no-unused-vars */
import {  createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add cart to cart by id, check if product id already exist in cart, then check if selectedSize or selectedColor is the same, if so, increase the quantity else add new collection to cart
    addProductToCart: (state, action) => {
      const { payload } = action;
      const itemIndex = state.cart.findIndex(
        (item) =>
          item.productId === payload.productId &&
          item.selectedSize === payload.selectedSize &&
          item.selectedColor === payload.selectedColor
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex].cartQuantity += payload.cartQuantity;
      } else {
        state.cart.push(payload);
      }
      state.totalItems += payload.cartQuantity;
      toast.success("Product added to cart");
    },
    // remove product from cart by id, selectedSize and selectedColor
    removeProductFromCart: (state, action) => {
      const { payload } = action;
      const itemIndex = state.cart.findIndex(
        (item) =>
          item.productId === payload.productId &&
          item.selectedSize === payload.selectedSize &&
          item.selectedColor === payload.selectedColor
      );
      state.totalItems -= state.cart[itemIndex].cartQuantity;
      state.cart = state.cart.filter(
        (item) =>
          item.productId !== payload.productId ||
          item.selectedSize !== payload.selectedSize ||
          item.selectedColor !== payload.selectedColor
      );
      toast.success("Product removed from cart");
    },
    // increase quantity of product in cart by id, selectedSize and selectedColor
    increaseQuantity: (state, action) => {
      const { payload } = action;
      const itemIndex = state.cart.findIndex(
        (item) =>
          item.productId === payload.productId &&
          item.selectedSize === payload.selectedSize &&
          item.selectedColor === payload.selectedColor
      );
      state.cart[itemIndex].cartQuantity += 1;
      state.totalItems += 1;
    },
    // decrease quantity of product in cart by id, selectedSize and selectedColor
    decreaseQuantity: (state, action) => {
      const { payload } = action;
      const itemIndex = state.cart.findIndex(
        (item) =>
          item.productId === payload.productId &&
          item.selectedSize === payload.selectedSize &&
          item.selectedColor === payload.selectedColor
      );
      state.cart[itemIndex].cartQuantity -= 1;
      state.totalItems -= 1;
      if (state.cart[itemIndex].cartQuantity === 0) {
        state.cart = state.cart.filter(
          (item) =>
            item.productId !== payload.productId ||
            item.selectedSize !== payload.selectedSize ||
            item.selectedColor !== payload.selectedColor
        );
      }
    },
    // empty cart
    emptyCart: (state) => {
      state.cart = [];
      state.totalItems = 0;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increaseQuantity,
  decreaseQuantity,
  emptyCart,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export const selectTotalItems = (state) => state.cart.totalItems;

export default cartSlice.reducer;

