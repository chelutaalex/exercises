import { useRef } from "react";


const UncontrolledInput = () => {

    const ref = useRef();

    return(
        <>
            <input ref = {ref} />
        </>
    )
}

export default UncontrolledInput