import { createStore } from "redux"
import movieListReducer from "./reducers/movie-list"
import cartReducer from "./reducers/cart"
import { combineReducers } from "redux"

const store = createStore(
  combineReducers({
    myMovies: movieListReducer,
    myCart: cartReducer,
  })
)

export default store
