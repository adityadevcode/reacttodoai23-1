import React, {useState} from 'react'

const Setcount = () => {
const [count, setCount]= useState(0);

  return (
    <div className="counter-app">
        <p>count:{count}</p>
        <button onClick ={()=>setCount(count+1)}>Increment</button>
        <button onClick ={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Setcount;