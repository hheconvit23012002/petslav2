import React from "react";
import Cart from "../../components/cart/Cart";
import { Link } from "react-router-dom"
import { useState } from "react";
import ReceiverInfo from "./../../components/receiver/ReceiverInfo"
import { useEffect } from "react";
function CartPage(){
    
    const [pageCurrent,setPageCurrent] = useState(true)
    useEffect( () => {
        if(window.location.pathname === "/receiver-info"){
            setPageCurrent( () => false)
        }
    },[])
    function onChangePageCart(e,type){
        setPageCurrent(type)
    }
    return (
        <div>
            <div>
                <Link to="/cart" className={pageCurrent ? "choose" : ""} onClick={e => onChangePageCart(e,true)}>Danh sách giở hàng</Link>
                <span>/</span>
                <Link to="/receiver-info" className={!pageCurrent ? "choose" : ""} onClick={e => onChangePageCart(e,false)}>Thông tin người nhận</Link>
            </div>
            {pageCurrent ? <Cart setPageCurrent={setPageCurrent}/> : <ReceiverInfo setPageCurrent={setPageCurrent}/>}
        </div>
    )
}
export default CartPage