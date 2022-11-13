import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {connect} from "react-redux";
import * as actions from "./../../action/index";
import ApiCallerHeader from "./../../utills/CallApiGetProfile";
function ReceiverInfo(props) {
    if(sessionStorage.getItem("token") === null){
        window.location.href  = "/cart"
    }
    props.onGetToken();
    let name = JSON.parse(localStorage.getItem("name"))
    const [ipName,setIpName] = useState(name)
    const [ipPhone,setIpPhone] = useState("")
    const [ipAddress,setIpAddress] = useState("")
    const [ipNote,setIpNote] = useState("")
    const MySwal = withReactContent(Swal)
    
    function handleSubmit(e){
        e.preventDefault()
        if(ipName !=="" && ipAddress !== "" && ipNote !=="" && ipPhone!== "" && sessionStorage.getItem("token") !== null){
            let sum=0
            let listItem = JSON.parse(localStorage.getItem("cart")).map(x => {
                sum+=(x.price * x.quantity)
                return {
                    product_id: x.id,
                    quantity:x.quantity,
                    price:x.price
                }
            })
            let dataRequest = {
                address:ipAddress,
                note:ipNote,
                number_phone:ipPhone,
                total_price: sum,
                orderItems: listItem
            }
            return ApiCallerHeader("/add-order/",'POST',dataRequest,props.token).then(() => {
                
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
            
        }else{
            MySwal.fire({
                title: <strong>Vui lòng nhập đủ thông tin</strong>,
                html: <i>You clicked the button!</i>,
                icon: 'error'
            })
        }
    }
    function back(){
        props.setPageCurrent(true)
    }
    function onChange(e){
        if(e.target.name === "phone-receiver"){
            setIpPhone(e.target.value)
        }
        else if(e.target.name === "name-receiver"){
            setIpName(e.target.value)
        }
        else if(e.target.name === "address-receiver"){
            setIpAddress(e.target.value)
        }
        else if(e.target.name === "note-receiver"){
            setIpNote(e.target.value)
        }
    }
    return (
        <div>
            Thông tin người nhận
            <form onSubmit={e => handleSubmit(e)}>
                Tên người nhận
                <br></br>
                <input type="text" name="name-receiver" required onChange={e => onChange(e)} value={ipName}></input>
                <br></br>
                Số điện thoại người nhận
                <br></br>
                <input name="phone-receiver" type="text" required onChange={e => onChange(e)} value={ipPhone} ></input>
                <br></br>
                Địa chỉ người nhận
                <br></br>
                <input name="address-receiver" type="text" required onChange={e => onChange(e)} value={ipAddress} ></input>
                <br></br>
                Chú ý
                <br></br>
                <input name="note-receiver" type="text" required onChange={e => onChange(e)} value={ipNote} ></input>
                <br></br>
                <button>Đặt hàng</button>
            </form>
            <Link to="/cart" onClick={() => back()}>Quay lại</Link>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}
const mapDisPatchToProps = (dispatch,props) => {
    return {
        onGetToken: () => {
            dispatch(actions.GetToken())
        },
        
    }
}

export default connect(mapStateToProps,mapDisPatchToProps)(ReceiverInfo)