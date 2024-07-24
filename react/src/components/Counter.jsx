import { useEffect, useState } from "react"

const Counter = () => {
const [count,setCount] = useState(0);

    return (
        <div>
            Count:{count}
        </div>
    )

} 

export default Counter