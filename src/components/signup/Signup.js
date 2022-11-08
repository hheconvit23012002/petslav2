import React, { useState } from "react";
import ApiCaller from "./../../utills/ApiCaller";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
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
       
        if(e.target.name === "firstName"){
            setIpFirstName(e.target.value)
        }
        else if(e.target.name === "lastName"){
            setIpLasttName(e.target.value)
        }else if(e.target.name === "email"){
            setIpEmail(e.target.value)
        }else if(e.target.name === "username"){
            setIpUserName(e.target.value)
        }else if(e.target.name === "password"){
            setIpPass(e.target.value)
        }
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name="firstName" placeholder="firstName" required value={ipFirstname} onChange={ (e) => onChange(e)}></input>
                <br></br>
                <input type="text" name="lastName" placeholder="lastName" required value={ipLastName} onChange={ (e) => onChange(e)}></input>
                <br></br>
                <input type="email" name="email" placeholder="email" required value={ipEmail} onChange={ (e) => onChange(e)}></input>
                <br></br>
                <input type="text" name="username" placeholder="username" required value={ipUserName} onChange={ (e) => onChange(e)}></input>
                <br></br>
                <input type="password" name="password" placeholder="password" required value={ipPass} onChange={ (e) => onChange(e)}></input>
                <br></br>
                <button>Đăng ký</button>
            </form>
        </div>
    )
}
export default Signup