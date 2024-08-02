import {useState} from "react"

const LoginForm = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleInsertUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleInsertPassword = (event) => {
        setPassword(event.target.value);
    }


    return(
        <>
            <p>Insert username</p>
            <input onChange={handleInsertUsername}></input>
            <p>Insert password</p>
            <input onChange={handleInsertPassword}></input>
        
        </>

    );
}

export default LoginForm