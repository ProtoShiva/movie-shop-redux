import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
  movies: [],
  isLoading: false,
  error: "",
}

export const updateMoviesAction = createAction("movieUpdate")
/**
 * same as doing this
 * exprot const updateACtion = function(value) {
 *  return {
 *   type: 'UPDATE ,
 *   payload
 * }
 * }
 */

// internally uses immer.js to manage immutability
const moviesReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateMoviesAction, (state, action) => {
    state.movies = action.payload
  })
})

//here you don't have to think about immutability, easily reducer function is created

export default moviesReducer
