import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { createStore } from "redux"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)

const initialState = {
  name: "himanshu",
}

function reducer(state = initialState, action) {
  //it receive state and action
  //based on action return a state
  //it must return a state

  if (action.type === "UPDATE_NAME") {
    const oldState = { ...state }
    oldState.name = action.value // never never do this, as you are mutating the state directly
    return oldState
  }

  if (action.type === "version") {
    const oldState = { ...state }
    oldState.version = action.payload // never never do this, as you are mutating the state directly
    return oldState
  }

  return state
}

const action = {
  type: "UPDATE_NAME",
  value: "JS",
}

const secondAction = {
  type: "version",
  payload: "20",
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch(action)
store.dispatch(secondAction)
