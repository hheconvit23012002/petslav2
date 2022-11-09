import React, { useState } from "react";
import ApiCaller from "./../../utills/ApiCaller";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from "react-router-dom";
import './signup.css';
function Signup(){
    const [ipFirstname,setIpFirstName] = useState("")
    const [ipLastName,setIpLasttName] = useState("")
    const [ipEmail,setIpEmail] = useState("")
    const [ipUserName,setIpUserName] = useState("")
    const [ipPass,setIpPass] = useState("")
    const MySwal = withReactContent(Swal)
    function handleSubmit(e){
        e.preventDefault()
        let res = {
            first_name: ipFirstname,
            last_name: ipLastName,
            email: ipEmail,
            username: ipUserName,
            password: ipPass
        }
        ApiCaller("/register/",'POST',res).then(e => {
            setIpFirstName("")
            setIpLasttName("")
            setIpPass("")
            setIpEmail("")
            setIpUserName("")
            MySwal.fire({
                title: <strong>Thành Công!</strong>,
                html: <i>You clicked the button!</i>,
                icon: 'success'
            })
        }).catch(e => {
            MySwal.fire({
                title: <strong>Lỗi không đăng ký được!</strong>,
                html: <i>You clicked the button!</i>,
                icon: 'error'
            })
        })
    }
    function onChange(e){
       
        if(e.target.className === "firstNameSignup"){
            setIpFirstName(e.target.value)
        }
        else if(e.target.className === "lastNameSignup"){
            setIpLasttName(e.target.value)
        }else if(e.target.className === "emailSignup"){
            setIpEmail(e.target.value)
        }else if(e.target.className === "usernameSignup"){
            setIpUserName(e.target.value)
        }else if(e.target.className === "passwordSignup"){
            setIpPass(e.target.value)
        }
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className="signup-background">
                <div className="signup-khung">
                    <input type="text" className="firstNameSignup" placeholder="firstName" required value={ipFirstname} onChange={ (e) => onChange(e)}></input>
                    <br></br>
                    <input type="text" className="lastNameSignup" placeholder="lastName" required value={ipLastName} onChange={ (e) => onChange(e)}></input>
                    <br></br>
                    <input type="email" className="emailSignup" placeholder="email" required value={ipEmail} onChange={ (e) => onChange(e)}></input>
                    <br></br>
                    <input type="text" className="usernameSignup" placeholder="username" required value={ipUserName} onChange={ (e) => onChange(e)}></input>
                    <br></br>
                    <input type="password" className="passwordSignup" placeholder="password" required value={ipPass} onChange={ (e) => onChange(e)}></input>
                    <br></br>
                    <button className="signup-sumbit">
                        <div className="signup-text">
                                Đăng kí
                         </div>
                    </button>
                    <br></br>
                    <Link to="/login" className="link-to-login">
                        <div className="link-login"> Đăng nhập  </div>
                    </Link> 
                </div>
            </div>
            </form>
        </div>
    )
}
export default Signup