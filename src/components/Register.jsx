import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthProvider";

const Register = () =>{

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {register} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleFormSubmission = async (e) =>{
        e.preventDefault();
        const res = await register(username,password)
        if(res && res.success){
            navigate('/login?message=Registered%20Successfully',{replace:true})
        } else {
            alert(res.message || 'Register failed')
        }
    }

    const registerjsx = <form onSubmit={ (e) => handleFormSubmission(e) }>
        <input type="text" placeholder="Username" autoComplete="username"
              onChange={ (e) => setUsername(e.target.value)}/><br/>
        <input type="password" placeholder="Password" autoComplete="password"
                               onChange={(e) => setPassword(e.target.value)}/><br/>
        <input type="submit"/>
    </form>

    return(
       <>{registerjsx}</>   
    )
}

export default Register