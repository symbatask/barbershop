import React, {useState} from "react"
const Counter = () =>{
    const [counter,setCounter] = useState(0)
const dec = () =>{
        setCounter(Math.max(0,counter - 1))
    }
    const inc = () =>{
        setCounter(Math.min(10,counter + 1))
    }

    return (
        <div>
            <button onClick={inc}>+</button>
            <span>{counter}</span>
            <button onClick={dec}>-</button>
        </div>
    )
}
export default Counter