import * as actions from "../../constants/movie-list"

//rather than making action objects one by one, use action creator function

export const updateLoader = (value) => {
  return {
    type: actions.UPDATE_LOADER,
    value,
  }
}

export const updateError = (value) => {
  return {
    type: actions.UPDATE_ERROR,
    value,
  }
}

export const updateData = (value) => {
  return {
    type: actions.UPDATE_DATA,
    value,
  }
}
