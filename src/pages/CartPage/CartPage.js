import React from "react";
import Cart from "../../components/cart/Cart";
import { Link } from "react-router-dom"
import { useState } from "react";
import ReceiverInfo from "./../../components/receiver/ReceiverInfo"
import { useEffect } from "react";
import "./CartPage.css"
function CartPage(){
    
    const [pageCurrent,setPageCurrent] = useState(true)
    useEffect( () => {
        if(window.location.pathname === "/receiver-info"){
            setPageCurrent( () => false)
        }
    },[])
    function onChangePageCart(e,type){
        if(type === false && sessionStorage.getItem("token")=== null){
            alert("đăng nhập đi")
        }else{
            setPageCurrent(type)
        }
    }
    return (
        <div>
            <div className="cart-page">
                <Link to="/cart"  onClick={e => onChangePageCart(e,true)}>
                    <button className={pageCurrent ? "choose" : "cart-page-hang"}> Danh sách giỏ hàng </button>
                </Link>
                {/* <span>/</span> */}
                <Link to="/receiver-info" onClick={e => onChangePageCart(e,false)}>
                <button className={pageCurrent ? "cart-page-info" :"choose" }> Thông tin người nhận </button>
                </Link>
            </div>
            {pageCurrent ? <Cart setPageCurrent={setPageCurrent}/> : <ReceiverInfo setPageCurrent={setPageCurrent}/>}
        </div>
    )
}
export default CartPage