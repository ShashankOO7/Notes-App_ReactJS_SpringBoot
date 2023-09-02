import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { Table } from "reactstrap";

const Home = () => {
    let [notes, setNotes] = useState([])
    let [search, setSearch] = useState([])

    let user = JSON.parse(localStorage.getItem("user"))

    let navigate = useNavigate()
    let editNotes=((id)=>{
        axios.get(`http://localhost:8080/notes/${id}`)
        .then((res)=>{
            localStorage.setItem("note", JSON.stringify(res.data.data))
            navigate("/editNote")
        })
        .catch(()=>{
            alert("Something went wrong")
        })
    })

    let deleteNotes=((id)=>{
        axios.delete(`http://localhost:8080/notes/${id}`)
        .then((res)=>{
            alert(res.data.data)
        })
        .catch(()=>{
            alert("Cannot Delete Product")
        })
    })

    useEffect(()=>{
        let fetchData=()=>{
            axios.get(`http://localhost:8080/notes/byUser-ID/${user.id}`)
            .then((res)=>{
                setNotes(res.data.data)
                setSearch(res.data.data)
            })
            .catch(()=>{
                alert("Bad Request")
            })
            
        }
        fetchData()
    },[user.id])

    let searchNotes=(e)=>{
        setSearch(notes.filter((x)=>x.title.toLowerCase().includes(e.target.value)))
      }

    return (
        <div>
            <Navbar />
            <input type='text' placeholder='Search Note By Title' onChange={searchNotes}/>
            <div>
            <Table responsive size="sm" dark cellPadding={20} >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Note</th>
                    <th>Date</th>
                    <th>EDIT</th>
                    <th>DELETE</th> 
                </tr>
            </thead>
                {
                    search.map((p)=>{
                        return(
                            <tbody>
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.note}</td>
                                <td>{p.date}</td>
                                <td><button onClick={()=>{editNotes(p.id)}} className={style.btn}>EDIT</button></td>
                                <td><button onClick={()=>{deleteNotes(p.id)}} className={style.btn} style={{backgroundColor:'crimson', width:70}}>DELETE</button></td>
                            </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
        </div>
    )
}
export default Home