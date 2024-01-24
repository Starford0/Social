import { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'



const Login=()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin =()=>{

        const users = JSON.parse(localStorage.getItem("churchGoers"))
        const myUsers = users.find((e)=> e.email === email && e.password === password )
        console.log("userdata",myUsers)
        if(myUsers){
            localStorage.setItem("loginData", JSON.stringify(myUsers))
            navigate("/home") 
        }else{
            alert("you dont have an account with us: Pls signUp")
        }
    }

    const handleLoginuser=()=>{
        navigate("/profile")
    }
    return(
        <div className='login-wrapper'>
            <div className='bck-img'>
                <img src="public/vertical-vector-pattern-chat-social-600nw-2206046121.webp" alt="" />
            </div>
            <div className='login-body'>
                <div className='loginh1'><h1>Login</h1></div>
                <div className='email'>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='email'/>
                </div>
                <div className='email'>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password'/>
                </div>
                <div className='loginbutt'>
                    <button onClick={handleLoginuser}>Login</button>
                </div>
                <div className='pass'>
                    
                    <p>Forgot password?</p>
                </div>
                <div className='account' onClick={handleLoginuser}><h4>Don't have an account? SignUp</h4></div>
            </div>
        </div>
    )
}

export default Login