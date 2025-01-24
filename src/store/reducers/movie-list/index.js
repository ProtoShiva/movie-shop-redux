import * as actions from "../../constants/movie-list"

const initialState = {
  movies: [],
}

function movieListReducer(state = initialState, action) {
  switch (action?.type) {
    case actions.UPDATE_LOADER: {
      const oldState = { ...state }
      oldState.isLoading = action.value //notice i don't have to set initialstate 'isLoading', i can set the object key on the reducer
      return oldState
    }
    case actions.UPDATE_ERROR: {
      const oldState = { ...state }
      oldState.isError = action.value
      return oldState
    }
    case actions.UPDATE_DATA: {
      const oldState = { ...state }
      oldState.movies = action.value
      return oldState
    }

    default:
      return state
  }

  return state
}

export default movieListReducer
