import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { connect } from "react-redux";
import * as actions from "./../../action/index";
import ApiCallerHeader from "./../../utills/CallApiGetProfile";
import "./ReceiverInfo.css"
function ReceiverInfo(props) {
    if (sessionStorage.getItem("token") === null) {
        window.location.href = "/cart"
    }
    props.onGetToken();
    let name = JSON.parse(localStorage.getItem("name"))
    const [ipName, setIpName] = useState(name)
    const [ipPhone, setIpPhone] = useState("")
    const [ipAddress, setIpAddress] = useState("")
    const [ipNote, setIpNote] = useState("")
    const MySwal = withReactContent(Swal)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(ipPhone.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g))
        if (ipName !== "" && ipAddress !== "" && ipNote !== "" && ipPhone !== "" && sessionStorage.getItem("token") !== null && ipPhone.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g) ) {
            let sum = 0
            let listItem = JSON.parse(localStorage.getItem("cart")).map(x => {
                sum += (x.price * x.quantity)
                return {
                    product_id: x.id,
                    quantity: x.quantity,
                    price: x.price
                }
            })
            let dataRequest = {
                address: ipAddress,
                note: ipNote,
                number_phone: ipPhone,
                total_price: sum,
                orderItems: listItem
            }
            ApiCallerHeader("/add-order/", 'POST', dataRequest, props.token).then(() => {
                props.onDelete()
                MySwal.fire({
                    title: <strong>Thành Công!</strong>,
                    html: <i>You clicked the button!</i>,
                    icon: 'success'
                })
            }).catch(() => {
                MySwal.fire({
                    title: <strong>Lỗi!</strong>,
                    html: <i>You clicked the button!</i>,
                    icon: 'error'
                })
            })

        }
         else {
            MySwal.fire({
                title: <strong>Vui lòng nhập đủ thông tin và đúng định dạng</strong>,
                html: <i>You clicked the button!</i>,
                icon: 'error'
            })
        }
    }
    function back() {
        props.setPageCurrent(true)
    }
    function onChange(e) {
        if (e.target.name === "phone-receiver") {
            setIpPhone(e.target.value)
        }
        else if (e.target.name === "name-receiver") {
            setIpName(e.target.value)
        }
        else if (e.target.name === "address-receiver") {
            setIpAddress(e.target.value)
        }
        else if (e.target.name === "note-receiver") {
            setIpNote(e.target.value)
        }
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="info">
                    <div className="info-name">
                        <div className="info-name-label">Tên người nhận</div>
                        <input className="info-name-text" type="text" name="name-receiver" required onChange={e => onChange(e)} value={ipName}></input>
                    </div>
                    <br></br>
                    <div className="info-name">
                        <div className="info-name-label">Số điện thoại người nhận</div>
                        <input className="info-name-text" type="text" name="phone-receiver" required onChange={e => onChange(e)} value={ipPhone}></input>
                    </div>
                    <br></br>
                    <div className="info-name">
                        <div className="info-name-label">Địa chỉ người nhận</div>
                        <input className="info-name-text" type="text" name="address-receiver" required onChange={e => onChange(e)} value={ipAddress}></input>
                    </div>
                    <br></br>
                    <div className="info-name">
                        <div className="info-name-label">Chú ý</div>
                        <input className="info-name-text" type="text" name="note-receiver" required onChange={e => onChange(e)} value={ipNote}></input>
                    </div>
                    <br></br>
                    <Link to="/cart" onClick={() => back()}>
                        <button className="btn-cancel">Quay lại</button>
                    </Link>
                    <button className="btn-oder">Đặt hàng</button>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}
const mapDisPatchToProps = (dispatch, props) => {
    return {
        onGetToken: () => {
            dispatch(actions.GetToken())
        },
        onDelete: () => {
            dispatch(actions.deleteCart())
        }
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(ReceiverInfo)