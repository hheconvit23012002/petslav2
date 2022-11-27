import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import * as actions from './../../action/index';
import ApiCaller from "./../../utills/ApiCaller";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './login.css';
import * as Toast from '../toast/toast'
function Login(props) {
    const navigate = useNavigate();
    const [inputUserName, setInputUsername] = useState("")
    const [inputPassWord, setInputPassWord] = useState("")
    const [isLoading, setLoading] = useState(false)
    const MySwal = withReactContent(Swal)
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const [checkError, setCheckError] = useState(false)
    function showErrorText(element, mes) {
        const inputValuedate = element.parentElement
        const errorDisplay = inputValuedate.querySelector('.small')
        errorDisplay.innerText = mes;
    }
    function removeErrorText(element){
        const inputValuedate = element.parentElement
        const errorDisplay = inputValuedate.querySelector('.small')
        errorDisplay.innerText = '';
    }
    if (form) {
        let valueUsername = username.value;
        let valuePassword = password.value;
        valueUsername = valueUsername.trim();
        valuePassword = valuePassword.trim();
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
                else{
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
                else{
                    setCheckError(() => {
                        return false;
                    })
                    removeErrorText(password);
                }
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
        let regex = /^[a-zA-Z)-9]+$/;
        if (!regex.test(value)) {
            setCheckError(() => {
                return true;
            })
            return true;
        }
        return false
    }
    async function HandlerSubmit(e) {
        e.preventDefault();
        if (inputUserName === "" || inputPassWord === "") {
            MySwal.fire({
                title: <strong>VUi lòng nhập hết</strong>,
                html: <i>You clicked the button!</i>,
                icon: 'error'
            })
        } else {
            if(!checkError){
            let user = {
                username: inputUserName,
                password: inputPassWord
                
            }
            setLoading(true)
                
                ApiCaller('/login/', 'POST', user).then(res => {
                    setLoading(false)
                props.onLogin(res.data.token)
                localStorage.setItem("name", JSON.stringify(res.data.name))
                props.onCHangeStatus(true)
                setInputUsername("")
                setInputPassWord("")
                MySwal.fire({
                    title: <strong>Thành Công!</strong>,
                    html: <i>You clicked the button!</i>,
                    icon: 'success'
                })
                navigate("/")
            })
            .catch(err => {
                setLoading(false)
                MySwal.fire({
                    title: <strong>Tài khoản mật khẩu không chính xác!</strong>,
                    html: <i>You clicked the button!</i>,
                    icon: 'error'
                })
            })
        }
        }
    }
    function onChange(e) {
        if (e.target.name === "username") {
            setInputUsername(e.target.value)
        } else {
            setInputPassWord(e.target.value)
        }
    }
    return (

        <form id='form' onSubmit={(e) => HandlerSubmit(e)}>

            <div  className="login-background">
                <div id="toast-login"></div>
                <div className="login-khung">
                    <div className="label-login"> Đăng nhập </div>
                    <div className="login-ip">
                        <div className="form-login">
                            {/* Tài khoản  */}
                            <input type="text" id='username' name="username" required className="username" placeholder="Tên tài khoản" value={inputUserName} onChange={(e) => onChange(e)}></input>
                            <div id='small' className="small"></div>
                        </div>
                        <div className="form-login">
                            {/* Mật khẩu */}
                            <input type="password" id='password' name="password" required className="password" placeholder="Mật khẩu" value={inputPassWord} onChange={(e) => onChange(e)}></input>
                            <div id='small' className="small"></div>
                        </div>
                    </div>
                    <div className="sumbit">
                        <div className="cover_button_submit">
                            {isLoading ? <div className="spinner-container"  >
                                <div className="loading-spinner">
                                </div>
                            </div> :
                                <button className="text-submit">
                                    Đăng nhập
                                </button>}
                            <div className="separate-wrap">
                                <div className="separate-dash"></div>
                                <div className="separate-text">OR</div>
                                <div className="separate-dash"></div>
                            </div>
                            <div className="submit-gg">Đăng nhập with Google </div>
                            <div className="submit-fb">Đăng nhập with Facebook </div>
                            <Link to="/signup" className="link-to-signup">
                                <button className="sigup"> Do not have an account? Register </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (token) => {
            dispatch(actions.saveLogin(token))
        },
        onCHangeStatus: (status) => {
            dispatch(actions.changeStatus(status))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)