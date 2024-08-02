import { useState } from "react";


const TextInput = () => {
    
    const [text, setText] = useState("");

    const handleTextInput = (event) => {
        console.log(text);
        setText(event.target.value);
    }


    return(
        <>
            <input onChange={handleTextInput}></input>
            <p>Testo: {text}</p>
        </>
    );
}



export default TextInput