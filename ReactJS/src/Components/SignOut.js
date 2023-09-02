import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const SignOut=()=>{
    let navigate = useNavigate();
    return(
        useEffect(()=>{
            localStorage.removeItem("user")
            navigate('/')
        })   
    )
}
export default SignOut