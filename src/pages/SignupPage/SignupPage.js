import React from "react";
import Signup from "./../../components/signup/Signup"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function SignupPage(){
    const navigate = useNavigate();
    useEffect(() => {
        if(sessionStorage.getItem("token") !== null){
            navigate("/")
        }
    },[navigate])
    return (
        <Signup />
    )
}
export default SignupPage