const initialState = {
  cart: {},
  movies: [],
}

function movieListReducer(state = initialState, action) {
  const { value } = action
  switch (action?.type) {
    case "UPDATE_LOADER": {
      const oldState = { ...state }
      oldState.isLoading = action.value //notice i don't have to set initialstate 'isLoading', i can set the object key on the reducer
      return oldState
    }
    case "UPDATE_ERROR": {
      const oldState = { ...state }
      oldState.isError = action.value
      return oldState
    }
    case "UPDATE_DATA": {
      const oldState = { ...state }
      oldState.movies = action.value
      return oldState
    }

    case "UPDATE_CART": {
      const oldState = { ...state }
      oldState.cart = { ...oldState.cart }
      const key = value["href"]
      if (oldState.cart[key]?.count) {
        oldState.cart[key].count += 1
      } else {
        oldState.cart[key] = {}
        oldState.cart[key].count = 1
        oldState.cart[key].value = value
      }
      return oldState
    }

    case "REMOVE_CART_ITEM": {
      const oldState = { ...state }
      const oldCart = { ...oldState.cart }
      delete oldCart[value]
      oldState.cart = { ...oldCart }
      return oldState
    }

    default:
      return state
  }

  return state
}

export default movieListReducer
