import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart", //cart + updateCart makes the name of the action for you
  initialState: {
    cart: {},
  },
  reducers: {
    updateCart: (state, action) => {
      const value = action.payload
      const key = value["href"]
      if (state.cart[key]?.count) {
        state.cart[key].count += 1
      } else {
        state.cart[key] = {}
        state.cart[key].count = 1
        state.cart[key].value = value
      }
    },
  },
  // extraReducers:{
  //   'movies/car':()=>{}
  // }
  // extraReducers:(builder)=>{
  //   builder.addCase('movies/car',(state,action)=>{
  //     //update here
  //   })
  // }
})

export const { updateCart } = cartSlice.actions
export default cartSlice.reducer
