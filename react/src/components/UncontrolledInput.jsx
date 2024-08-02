import { useRef } from "react";


const UncontrolledInput = () => {

    const ref = useRef(null);

    const handleClick = () => {
        alert(ref.current.value);
        console.log(ref)
    }

    return(
        <>
            <input ref = {ref}/><br />
            <button onClick={handleClick}>alert</button>
        </>
    )
}

export default UncontrolledInput