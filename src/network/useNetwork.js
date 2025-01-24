import { useState } from "react"
import axios from "axios"
import { List } from "./data"
import { useDispatch } from "react-redux"
import {
  updateData,
  updateError,
  updateLoader,
} from "../store/actions/movie-list"
import { updateMoviesAction } from "../store2/reducers/movies"

function useNetwork() {
  const dispatch = useDispatch()

  function fetch() {
    dispatch(updateLoader(true))
    dispatch(updateError(""))
    dispatch(updateData([]))

    setTimeout(() => {
      axios
        .get("/data.json")
        .then((data) => {
          //console.log(List);
          dispatch(updateData(List))
          dispatch(updateMoviesAction(List))
        })
        .catch((e) => {
          dispatch(updateError("Error while fetching data"))

          //  console.log("Error occurred whil e fetching data", e?.response);
        })
        .finally(() => {
          dispatch(updateLoader(false))
        })
    }, 1200)
  }

  return { fetch }
}

export default useNetwork
