//rather than making action objects one by one, use action creator function

export const updateLoader = (value) => {
  return {
    type: "UPDATE_LOADER",
    value,
  }
}

export const updateError = (value) => {
  return {
    type: "UPDATE_ERROR",
    value,
  }
}

export const updateData = (value) => {
  return {
    type: "UPDATE_DATA",
    value,
  }
}

export const addToCart = (value) => {
  return {
    type: "UPDATE_CART",
    value,
  }
}

export const removeFromCart = (value) => {
  return {
    type: "REMOVE_CART_ITEM",
    value,
  }
}
