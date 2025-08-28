import { useSelector } from "react-redux"
import type { RootState } from "../store/store" 

const Count = () => {
    const count=useSelector((state:RootState)=>state.counter)
  return (
    <div>
        <p>{count}</p>
    </div>
  )
}

export default Count