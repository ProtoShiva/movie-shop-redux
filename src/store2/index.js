import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "./reducers/movies"
import cartReducer from "./reducers/cart"

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    cart: cartReducer,
  },
})

export default store
