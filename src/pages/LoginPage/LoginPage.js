import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../components/login/Login";
function LoginPage(){
    const navigate = useNavigate();
    useEffect(() => {
        if(sessionStorage.getItem("token") !== null){
            navigate("/")
        }
    },[navigate])
    
    return (
        <Login/>
    )
}
export default LoginPage