import { useReducer } from "react"
import { reducer } from "./reducer/reducer";


const Counter = () =>{

  const initialState = {
    count : 0,
  }
  const [state , dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () =>{
    dispatch (
      {
        type: "Counter/increment",
        payload : 1
      }
    )
  }
  
  return(
      <>
        <h1>Count + {state.count}</h1>
        <button>-</button>
        <button onClick={handleIncrement}>+</button>
      </>
  )

}
export default Counter