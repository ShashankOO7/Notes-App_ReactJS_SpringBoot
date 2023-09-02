import axios from "axios";
import React, { useState } from "react";
import style from "./style.module.css"
import { Link, useNavigate } from "react-router-dom";

const EditNote = () => {

    let navigate = useNavigate()

    let p = JSON.parse(localStorage.getItem("note"))
    let [title, setTitle] = useState(p.title)
    let [note, setNote] = useState(p.note)

    let [id, setId] = useState(p.id)
    let edit = (e) => {
        let user = JSON.parse(localStorage.getItem("user"))
        e.preventDefault()
        let data = { id, title, note }
        axios.put(`http://localhost:8080/notes/${user.id}`, data)
            .then((res) => {
                setId(user.id)
                alert("Note Updated with ID: "+res.data.data.id)
                navigate('/home')
            })
            .catch(() => {
                alert("Title is not UNIQUE")
            })
    }

    return (
        <div>
            <div className={style.main}>
                <div className={style.block}>
                    <form action="" onSubmit={edit} method="PUT">
                        <h1 className={style.color}>Edit Note</h1><br />
                        <input type="text" value={title} placeholder="Enter Name" onChange={(e) => { setTitle(e.target.value) }} /><br /><br />
                        <input type="text" value={note} placeholder="Enter Brand" onChange={(e) => { setNote(e.target.value) }} /><br /><br />
                        <button className='btn btn-primary'>Edit</button><br />
                        <p className={style.color}><Link to="/home">Cancel</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EditNote