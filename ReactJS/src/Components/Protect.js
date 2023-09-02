import React from "react";
import SignIn from "./SignIn"

const Protect = ({ Child }) => {
    let verify = () => {
        let user = localStorage.getItem("user")
        if (user == null) {
            return false
        }
        else {
            return true
        }
    }
    return (
        <>
            {
                verify() ? <Child /> : <SignIn />
            }
        </>
    )
}
export default Protect