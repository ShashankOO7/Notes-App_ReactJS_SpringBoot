import React, { useState } from "react";
import style from "./style.module.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const UpdateUser=()=>{
    let user = JSON.parse(localStorage.getItem("user"))
    let navigate = useNavigate();

    let [id, setId] = useState(user.id)
    let [name, setName] = useState(user.name)
    let [phone, setPhone] = useState(user.phone)
    let [email, setEmail] = useState(user.email)
    let [password, setPassword] = useState(user.password)
    
    let handleSubmit = (event) => {
        event.preventDefault(); //prevents the page from reloading
        let user = {id,name,phone,email,password}
        
        if(id && name && phone && email && password)
        {
            axios.put('http://localhost:8080/users', user)
            .then((res)=>{
                alert(res.data.message)
                localStorage.setItem("user", JSON.stringify(res.data.data))
                console.log(res)
                navigate('/viewUser')
            })
        }
        else
        {
            alert('Invalid Credentials')
        }
        console.log(user)
      }

    return(
        <div className={style.main}>
        <div className={style.block}>
            <form action="" onSubmit={handleSubmit} method="POST">
            <h1 className={style.color}>Update User</h1><br/>
                {/* <label htmlFor="">First Name:</label> */}
                <input type="text" name="name" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}/><br/><br/>
                {/* <label htmlFor="">Last Name:</label> */}
                <input type="tel" name="phone" placeholder="Enter Phone Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/><br/><br/>
                {/* <label htmlFor="">Email Address:</label> */}
                <input type="email" name="email" placeholder="Enter Email Address" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br /><br />
                {/* <label htmlFor="">Password:</label> */}
                <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br /><br />
                <button className='btn btn-primary'>Submit</button><br />
                <Link to="/home">Cancel</Link>
            </form>
        </div>
        </div>
    )
}
export default UpdateUser