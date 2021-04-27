import React,{useState} from "react"
const Form = () =>{
    const [login, setLogin]=useState("")
    const [password, setPassword]=useState("")


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(login,password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"

                   placeholder="Enter your email"
                   onChange={(e)=>setLogin(e.target.value)}
            />
            <input type="password"
                   placeholder="Enter your password"
                   onChange={(e)=>setPassword(e.target.value)}
            />

            <button>login</button>

        </form>
    )
}




export default Form