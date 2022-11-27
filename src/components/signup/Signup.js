import React, { useState } from "react";
import ApiCaller from "./../../utills/ApiCaller";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from "react-router-dom";
import './signup.css';
function Signup() {
    const [ipFirstname, setIpFirstName] = useState("")
    const [ipLastName, setIpLasttName] = useState("")
    const [ipEmail, setIpEmail] = useState("")
    const [ipUserName, setIpUserName] = useState("")
    const [ipPass, setIpPass] = useState("")
    const [isLoading, setLoading] = useState(false)
    const MySwal = withReactContent(Swal)
    const form = document.getElementById('form-1') ?? null;
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const [checkError, setCheckError] = useState(false)
    function showErrorText(element, mes) {
        const inputValuedate = element.parentElement
        const errorDisplay = inputValuedate.querySelector('.small')
        errorDisplay.innerText = mes;
    }
    function removeErrorText(element) {
        const inputValuedate = element.parentElement
        const errorDisplay = inputValuedate.querySelector('.small')
        errorDisplay.innerText = '';
    }
    if (form) {
        let valueUsername = username.value;
        let valuePassword = password.value;
        let valuefirstName = firstName.value;
        let valuelastName = lastName.value;
        valueUsername = valueUsername.trim();
        valuePassword = valuePassword.trim();
        valuefirstName = valuefirstName.trim();
        valuelastName = valuelastName.trim();
        form.addEventListener('submit', e => {
            e.preventDefault();
            if (isErrorText(valueUsername)) {
                showErrorText(username, "Bao gồm các ký tự chữ hoặc số");
            } else {
                setCheckError(() => {
                    return false;
                })
                removeErrorText(username);
                if (isErrorMinMax(valueUsername)) {
                    showErrorText(username, "Cần tối thiểu 6 ký tự");
                }
                else {
                    setCheckError(() => {
                        return false;
                    })
                    removeErrorText(username);
                }
            }
            if (isErrorText(valuePassword)) {
                showErrorText(password, "Bao gồm các ký tự chữ hoặc số");
            } else {
                setCheckError(() => {
                    return false;
                })
                removeErrorText(password);
                if (isErrorMinMax(valuePassword)) {
                    showErrorText(password, "Cần tối thiểu 6 ký tự");
                }
                else {
                    setCheckError(() => {
                        return false;
                    })
                    removeErrorText(password);
                }
            }
            if (isErrorText(valuefirstName)) {
                showErrorText(firstName, "Bao gồm các ký tự chữ hoặc số");
            } else {
                setCheckError(() => {
                    return false;
                })
                removeErrorText(firstName);
                // if (isErrorMinMax(valuefirstName)) {
                //     showErrorText(firstName, "Cần tối thiểu 6 ký tự");
                // }
                // else {
                //     setCheckError(() => {
                //         return false;
                //     })
                //     removeErrorText(firstName);
                // }
            }
            if (isErrorText(valuelastName)) {
                showErrorText(lastName, "Bao gồm các ký tự chữ hoặc số");
            } else {
                setCheckError(() => {
                    return false;
                })
                removeErrorText(lastName);
                // if (isErrorMinMax(valuelastName)) {
                //     showErrorText(lastName, "Cần tối thiểu 6 ký tự");
                // }
                // else {
                //     setCheckError(() => {
                //         return false;
                //     })
                //     removeErrorText(lastName);
                // }
            }
        })
    }
    function isErrorMinMax(value) {
        if (value.length < 6) {
            setCheckError(() => {
                return true;
            })
            return true;
        }
        return false;
    }
    function isErrorText(value) {
        let regex = /^[a-zA-Z0-9- ]+$/;
        if (!regex.test(value)) {
            setCheckError(() => {
                return true;
            })
            return true;
        }
        return false
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (ipFirstname === "" || ipLastName === "" || ipEmail === "" || ipUserName === "" || ipPass === "") {
            MySwal.fire({
                title: <strong>Vui lòng nhập hết các trường!</strong>,
                html: <i>You clicked the button!</i>,
                icon: 'error',
            })
        }
        else {
            if (!checkError) {
                let res = {
                    first_name: ipFirstname,
                    last_name: ipLastName,
                    email: ipEmail,
                    username: ipUserName,
                    password: ipPass
                }
                setLoading(true)
                ApiCaller("/register/", 'POST', res).then(e => {
                    setLoading(false)
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
                    setLoading(false)
                    MySwal.fire({
                        title: <strong>Lỗi không đăng ký được!</strong>,
                        html: <i>You clicked the button!</i>,
                        icon: 'error'
                    })
                })
            }
        }
    }
    function onChange(e) {

        if (e.target.className === "firstNameSignup") {
            setIpFirstName(e.target.value)
        }
        else if (e.target.className === "lastNameSignup") {
            setIpLasttName(e.target.value)
        } else if (e.target.className === "emailSignup") {
            setIpEmail(e.target.value)
        } else if (e.target.className === "usernameSignup") {
            setIpUserName(e.target.value)
        } else if (e.target.className === "passwordSignup") {
            setIpPass(e.target.value)
        }
    }
    return (
        <div>
            <form id='form-1' onSubmit={(e) => handleSubmit(e)}>
                <div className="signup-background">
                    <div className="signup-khung">
                        <div className="sigup-lable">Đăng Ký</div>
                        <div className="signup-ip">
                            <div id='error-sigup'>
                                <input id='firstName' type="text" className="firstNameSignup" placeholder="firstName" required value={ipFirstname} onChange={(e) => onChange(e)}></input>
                                <div id='small' className="small"></div>
                            </div>
                            <div id='error-sigup'>
                                <input id='lastName' type="text" className="lastNameSignup" placeholder="lastName" required value={ipLastName} onChange={(e) => onChange(e)}></input>
                                <div id='small' className="small"></div>
                            </div>
                            <div id='error-sigup'>
                                <input id='email' type="email" className="emailSignup" placeholder="email" required value={ipEmail} onChange={(e) => onChange(e)}></input>
                                <div id='small' className="small"></div>
                            </div>
                            <div id='error-sigup'>
                                <input id='username' type="text" className="usernameSignup" placeholder="username" required value={ipUserName} onChange={(e) => onChange(e)}></input>
                                <div id='small' className="small"></div>
                            </div>
                            <div id='error-sigup'>
                                <input id='password' type="password" className="passwordSignup" placeholder="password" required value={ipPass} onChange={(e) => onChange(e)}></input>
                                <div id='small' className="small"></div>
                            </div>
                        </div>
                        {/* <button className="signup-sumbit">
                        <div className="signup-text">
                                Đăng kí
                         </div>
                    </button> */}
                        <div>
                            <div className="sumbit">
                                {isLoading ? <div className="spinner-container"  >
                                    <div className="loading-spinner">
                                    </div>
                                </div> :
                                    <button className="sumbit-signup">
                                        Đăng Ký
                                    </button>
                                }
                                <div className="separate-wrap">
                                    <div className="separate-dash"></div>
                                    <div className="separate-text">OR</div>
                                    <div className="separate-dash"></div>
                                </div>
                                <div className="submit-gg">Đăng nhập with Google </div>
                                <div className="submit-fb">Đăng nhập with Facebook </div>
                                <Link to="/login" className="link-to-signup">
                                    <button className="sigup">Already have an account? Login </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Signup