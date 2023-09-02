import React, { useState } from "react";
import style from "./style.module.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SignIn=()=>{
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        let data = {email, password}
        axios.post(`http://localhost:8080/users/verifyByEmail?email=${email}&password=${password}`, data)
        .then((res)=>{
            if(res.data.statusCode === 200)
            {
                localStorage.setItem("user", JSON.stringify(res.data.data))
                alert(res.data.message)
                navigate('/home')
            }
        }).catch(()=>{
            alert("Invalid email or password")
            navigate('/')
        })
        // console.log(event.target.emailaddress.value)
        // console.log(event.target.password.value)
      }

    return(
        <div className={style.main}>
        <div className={style.block}>
            <form action="" onSubmit={handleSubmit} method="POST">
            <h1 className={style.color}>Sign In</h1>
                {/* <label htmlFor="">Email Address:</label> */}
                <input type="email" name="emailaddress" placeholder="Enter Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
                {/* <label htmlFor="">Password:</label> */}
                <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br /><br />
                <button className='btn btn-primary'>Submit</button><br/>
                <p className={style.color}>Don't have an account? <Link to="/signup">Signup</Link></p>
            </form>
        </div>
        </div>
    )
}
export default SignIn