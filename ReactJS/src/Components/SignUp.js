import React, { useRef } from "react";
import style from "./style.module.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SignUp=()=>{

    let navigate = useNavigate();

    let name = useRef(null)
    let phone = useRef(null)
    let email = useRef(null)
    let password = useRef(null)
    
    let handleSubmit = (event) => {
        event.preventDefault(); //prevents the page from reloading
        let data = {
        name : name.current.value,
        phone : phone.current.value,
        email : email.current.value,
        password : password.current.value,
        }
        
        if(name && phone && email && password)
        {
            axios.post('http://localhost:8080/users', data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
            }).catch(()=>{
                alert("User Already Exists")
            })
        }
        else
        {
            alert('Invalid Credentials')
        }
        console.log(data)
      }

    return(
        <div className={style.main}>
        <div className={style.block}>
            <form action="" onSubmit={handleSubmit} method="POST">
            <h1 className={style.color}>Sign Up</h1><br/>
                {/* <label htmlFor="">First Name:</label> */}
                <input type="text" name="name" placeholder="Enter Name" ref={name}/><br/><br/>
                {/* <label htmlFor="">Last Name:</label> */}
                <input type="tel" name="phone" placeholder="Enter Phone Number" ref={phone}/><br/><br/>
                {/* <label htmlFor="">Email Address:</label> */}
                <input type="email" name="email" placeholder="Enter Email Address" ref={email}/><br /><br />
                {/* <label htmlFor="">Password:</label> */}
                <input type="password" name="password" placeholder="Enter Password" ref={password} /><br /><br />
                <button className='btn btn-primary'>Submit</button><br />
                <p className={style.color}>Already have an account? <Link to="/">Sign In</Link></p>
            </form>
        </div>
        </div>
    )
}
export default SignUp