import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Login()
{
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")

    const navigate = useNavigate()
    return(<>
        <h2>Login</h2>
        <form 
        onSubmit={(e) => {
            e.preventDefault()
            
            if(userName === password)
            {
                setErrMsg("")
                navigate("/Dashboard")
            }
            else 
            {
                setErrMsg("Not A Valid User")
            }
                
        }
        }
        >
            <input 
            id="userName"
            type="text" 
            placeholder="Enter Username"
            onChange={
                (e) => {
                    setUserName(e.target.value)
                }
            }
            required
            />
            <br/><br/>
            <input 
            id="password"
            type="password"
            placeholder="Enter Password"
            onChange={
                (e) => {
                    setPassword(e.target.value)
                }
            }/>
            <br/><br/>
            <button type="submit">Login</button>
            {errMsg && <h3 style={{ color: "red" }}>{errMsg}</h3>}
        </form>
        
               
    </>)
}
