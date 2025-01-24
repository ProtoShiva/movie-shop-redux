import { createStore } from "redux"
import movieListReducer from "./reducers/movie-list"

const store = createStore(movieListReducer)

export default store
