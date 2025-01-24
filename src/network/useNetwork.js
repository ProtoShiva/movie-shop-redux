import { useState } from "react"
import axios from "axios"
import { List } from "./data"

function useNetwork() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState("")

  function fetch() {
    setIsLoading(true)
    setError("")
    setData("")

    axios
      .get("/data.json")
      .then((data) => {
        //console.log(List);
        setData(List)
      })
      .catch((e) => {
        setError("Error occu  rred while  fetching data")
        //  console.log("Error occurred whil e fetching data", e?.response);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return { isLoading, error, data, fetch }
}

export default useNetwork
