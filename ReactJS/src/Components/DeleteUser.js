import React, { useState } from "react";
import style from "./style.module.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteUser = () => {
    const [password, setPassword] = useState('')
    const [id, setId] = useState("")

    let user = JSON.parse(localStorage.getItem("user"))

    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault()

        let data = { password }
        axios.post(`http://localhost:8080/users/verifyByEmail?email=${user.email}&password=${password}`, data)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    alert(res.data.message)
                    axios.delete(`http://localhost:8080/users/${user.id}`, id)
                        .then((res) => {
                            if (res.data.statusCode === 200) {
                                alert(res.data.message)
                                localStorage.removeItem("user")
                                navigate('/')
                            }
                        })
                }
            }).catch(() => {
                alert("Invalid password")
                navigate('/home')
            })

    }

    return (
        <div className={style.main}>
            <div className={style.block}>
                <form action="" onSubmit={handleSubmit} method="POST">
                    <h1 className={style.color}>Delete User</h1><br />
                    <input type="password" name="password" placeholder="Confirm Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
                    <button className='btn btn-primary'>Submit</button><br /><br />
                    <Link to="/home">Cancel</Link>
                </form>
            </div>
        </div>
    )
}
export default DeleteUser