import { useDispatch } from "react-redux"
import Count from "./componenets/Count";
import { decrement, increment } from "./store/store";

const App = () => {
  const dispatch=useDispatch();

  return (
    <div>
      <button onClick={()=>dispatch(increment())}>+</button>
     <Count/>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default App