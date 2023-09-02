import React, { useState } from "react";
import axios from "axios";
import style from "./style.module.css"
import { Link, useNavigate } from "react-router-dom";

const AddNote=()=>{
    let [title, setTitle] = useState("")
    let [note, setNote] = useState("")

    let navigate = useNavigate()

    let add=(e)=>{
        e.preventDefault()
        let user = JSON.parse(localStorage.getItem("user"))
        let data = {title, note}
        axios.post(`http://localhost:8080/notes/${user.id}`, data)
        .then((res)=>{
            alert("Note added with ID: "+res.data.data.id)
            navigate('/home')
        }).catch(()=>{
            alert('Error, Something went wrong')
        })
    }

    return(
        <div className={style.main}>
        <div className={style.block}>
            <form action="" onSubmit={add} method="POST">
            <h1 className={style.color}>Add Note</h1><br/>
                <input type="text" value={title} placeholder="Enter Title" onChange={(e)=>{setTitle(e.target.value)}} /><br/><br/>
                <textarea rows="4" cols="50" value={note} placeholder="Enter Note" onChange={(e)=>{setNote(e.target.value)}} /><br/><br/>
                <button className='btn btn-primary'>ADD</button><br />
                <p className={style.color}><Link to="/home">Cancel</Link></p>
            </form>
        </div>
        </div>
    )
}
export default AddNote