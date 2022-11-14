import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import * as actions from './../../action/index';
import ApiCaller from "./../../utills/ApiCaller";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './login.css';
function Login(props) {
    const navigate = useNavigate();
    const [inputUserName, setInputUsername] = useState("")
    const [inputPassWord, setInputPassWord] = useState("")
    const [isLoading, setLoading] = useState(false)
    const MySwal = withReactContent(Swal)
    async function HandlerSubmit(e) {
        e.preventDefault();
        if (inputUserName === "" || inputPassWord === "") {
            MySwal.fire({
                title: <strong>VUi lòng nhập hết</strong>,
                html: <i>You clicked the button!</i>,
                icon: 'error'
            })
        } else {
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
    function onChange(e) {
        if (e.target.name === "username") {
            setInputUsername(e.target.value)
        } else {
            setInputPassWord(e.target.value)
        }
    }
    return (

        <form onSubmit={(e) => HandlerSubmit(e)}>

            <div className="login-background">

                <div className="login-khung">
                    <div className="label-login"> Đăng nhập </div>
                    <br></br>
                    {/* Tài khoản  */}
                    <input type="text" name="username" required className="username" placeholder=" Tên tài khoản" value={inputUserName} onChange={(e) => onChange(e)}></input>
                    <br></br>
                    {/* Mật khẩu */}
                    <input type="password" name="password" required className="password" placeholder=" Mật khẩu" value={inputPassWord} onChange={(e) => onChange(e)}></input>
                    <br></br>
                    <div className="cover_button_submit">
                        {isLoading ? <div className="spinner-container"  >
                            <div className="loading-spinner">
                            </div>
                        </div> :
                            <button className="sumbit">
                                <div className="text-submit">
                                    Đăng nhập
                                </div>
                            </button>}
                    </div>
                    <br></br>
                    <Link to="/signup" className="link-to-signup">
                        <div className="sigup"> Đăng ký ?  </div>
                    </Link>
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