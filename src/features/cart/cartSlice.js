import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  cartItems: null,
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartItem = state.products.find((item) => item.id === payload)
      state.cartItems.push({
        _id:cartItem._id,
        id: cartItem.id,
        amount: 1,
        price: cartItem.price,
        image:cartItem.image,
        title:cartItem.title
      })
    },
    addCartItems:(state, { payload }) => {
      if(state.cartItems===null){
        state.cartItems = payload
      }
    },
    addProducts: (state, { payload }) => {
      state.products = payload
    },
    increaseProduct: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload)
      cartItem.amount += 1
    },
    decreaseProduct: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload)
      cartItem.amount -= 1
    },
    cartTotal: (state) => {
      let amount = 0
      let total = 0
      state.cartItems?.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
    removeProduct: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload)
    },
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const {
  addToCart,
  addProducts,
  increaseProduct,
  decreaseProduct,
  cartTotal,
  removeProduct,
  clearCart,
  addCartItems
} = cartSlice.actions

export default cartSlice.reducer
