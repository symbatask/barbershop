import React,{useState} from "react"
const Greeting = () => {
    const [name, setName] = useState("")



    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name)
    }

    return (
        <form onInput = {handleSubmit}>
            <input type = "text"

                   placeholder="Enter your name"
                   onChange={(e)=>setName(e.target.value)}
            />


            <h1>Hello,{name}</h1>

        </form>
    )
}



export default Greeting