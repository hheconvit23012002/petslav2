import React from "react";
import "./cart.css"
import { connect } from "react-redux"
import * as actions from "./../../action/index"
import { Link } from "react-router-dom"
function Cart(props) {
    function converToVND(value) {
        var test1 = value.toString();
        var x = test1.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        return x;
    }
    let sumprice =0
    function handleChangeQuantity(id,type) {
        props.onUpdateQuantity(id, type)
    }
    function handlePay(){ 
        props.setPageCurrent(false)
    }
    return (
        props.listItem.length ?
            <div>
                <table style={{ border: "1px solid black", width: "100%", margin: "100px 0 0 0" }}>
                    <tbody>
                        <tr>
                            <td>mã</td>
                            <td>tên</td>
                            <td>ảnh</td>
                            <td>giá</td>
                            <td>số lượng</td>
                            <td>tổng tiền</td>
                            <td>hành động</td>
                        </tr>
                        {
                            props.listItem.map(x => {
                                sumprice += (x.price * x.quantity)
                                return (
                                    <tr key={x.id}>
                                        <td>{x.id}</td>
                                        <td>{x.product_name}</td>
                                        <td>
                                            <img style={{ height: "100px" }} src={`http://petsla-api.herokuapp.com${x.images}`} alt=""></img>
                                        </td>
                                        <td>{converToVND(x.price)}</td>
                                        <td>
                                            <button onClick={() => handleChangeQuantity(x.id,"incre")}>+</button>
                                            <span style={{ margin: "0 8px" }}>
                                                {x.quantity}
                                            </span>
                                            <button onClick={() => handleChangeQuantity(x.id,"decre")}>-</button>
                                        </td>
                                        <td>{converToVND(x.price * x.quantity)}</td>
                                        <td>
                                            <button onClick={() => handleChangeQuantity(x.id,"delete")}>Xóa</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <div>Tổng tiền : {converToVND(sumprice)}</div>
                    <Link to="/receiver-info" onClick={() => handlePay()}>Tiếp tục</Link>
                </div>
            </div> :
            <div>Giở hàng trống</div>
    )
}
const mapStateToProps = (state) => {
    return {
        listItem : state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateQuantity: (id, type) => {
            dispatch(actions.updateCart(id, type))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)