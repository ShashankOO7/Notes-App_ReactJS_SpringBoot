import React, { useState } from "react";
import style from "./style.module.css"
import {Link} from "react-router-dom";
import axios from "axios";

const ViewUser=()=>{

    let user = JSON.parse(localStorage.getItem("user"))

    const[id, setId] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        let data = {id}
        axios.get(`http://localhost:8080/users/${id}`, data)
        .then((res)=>{
            if(res.data.statusCode === 200)
            {
                alert(res.data.message)
            }
            else
            {
                alert(res.data.message)
            }
        }
    )}
    return(
        <div className={style.main}>
        <div className={style.block}>
            <form action="" onSubmit={handleSubmit} method="POST">
            <h1 className={style.color}>View User</h1><br/>
                <h5 className={style.color}> NAME : {user.name} </h5><br/>
                <h5 className={style.color}> PHONE : {user.phone} </h5><br/>
                <h5 className={style.color}> EMAIL : {user.email} </h5><br/>
                <Link to="/home">Cancel</Link>
            </form>
        </div>
        </div>
    )
}
export default ViewUser