import { useEffect, useState } from "react"

const Counter = () => {
const [count,setCount] = useState(0);
const handleIncrement = () => {
    setCount(count+1)
}

    return (
        <>
        <div>
            Count:{count}
        </div>

        <button onClick={handleIncrement}>Incrementa</button>

        </>
    )
        
} 

export default Counter