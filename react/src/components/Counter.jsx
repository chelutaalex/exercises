import { useEffect, useState } from "react"

const Counter = () => {
const [count,setCount] = useState(0);

const handleIncrement = () => {
    setCount(count+1)
}

const handleDecrement = () => {
    setCount(count-1)
}

const handleReset = () => {
    setCount(0)
}

useEffect(() => {
    console.log("Titolo aggiornato");
}, [count]);


    return (
        <>
        <h1>{count}</h1>
        <div>
            Count:{count}
        </div>
            <button onClick={handleIncrement}>Incrementa</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset to 0</button>
        </>
    )
        
} 

export default Counter