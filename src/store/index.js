import { createStore } from "redux"
import movieListReducer from "./reducers/movie-list"
import cartReducer from "./reducers/cart"
import { combineReducers } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"

const enhancers = composeWithDevTools({ trace: true, limit: 10 })

const store = createStore(
  combineReducers({
    myMovies: movieListReducer,
    myCart: cartReducer,
  }),
  enhancers()
)

export default store
