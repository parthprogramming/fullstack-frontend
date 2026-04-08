import {useState} from 'react'

const Sample = () => {
    const [username , setUsername] = useState('')
    const [submitted , setSubmitted] = useState(false)
    return(
        <>

        <input type='text' placeholder="enter the username" onChange={(e)=>setUsername(e.target.value)}></input>
        <button onClick={()=>setSubmitted(true)}>Submit</button>
        {submitted && <p>Hello , {username}</p>}
        
        </>
    )
}


export default Sample;