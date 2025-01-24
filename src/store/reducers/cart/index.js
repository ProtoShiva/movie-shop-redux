import * as actions from "../../constants/cart"

const initialState = {
  cart: {},
}

function cartReducer(state = initialState, action) {
  const { value } = action

  switch (action?.type) {
    case actions.UPDATE_CART: {
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

    case actions.REMOVE_CART: {
      const oldState = { ...state }
      const oldCart = { ...oldState.cart }
      delete oldCart[value]
      oldState.cart = { ...oldCart }
      return oldState
    }

    default:
      return state
  }
}

export default cartReducer
