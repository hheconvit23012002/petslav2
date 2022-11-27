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
    let sumprice = 0
    function handleChangeQuantity(id, type) {
        props.onUpdateQuantity(id, type)
    }
    function handlePay(e) {
        if (sessionStorage.getItem("token") === null) {
            e.preventDefault()
            alert("đăng nhập đi")
        } else {
            props.setPageCurrent(false)
        }
    }
    return (
        props.listItem.length ?
            <div className="background-cart">
                <table className="table-cart">
                    <tbody>
                        <tr>
                            <td className="btn-td">Mã</td>
                            <td className="btn-td">Tên</td>
                            <td className="btn-td">Ảnh</td>
                            <td className="btn-td">Giá</td>
                            <td className="btn-td">Số lượng</td>
                            <td className="btn-td">Tổng tiền</td>
                            <td className="btn-td">Hành động</td>
                        </tr>
                        {
                            props.listItem.map(x => {
                                sumprice += (x.price * x.quantity)
                                return (
                                    <tr key={x.id}>
                                        <td className="btn-td-item">{x.id}</td>
                                        <td className="btn-td-item">{x.product_name}</td>
                                        <td className="btn-td-item">
                                            <img style={{ height: "100px" }} src={`http://petsla-api.herokuapp.com${x.images}`} alt=""></img>
                                        </td>
                                        <td className="btn-td-item">{converToVND(x.price)}</td>
                                        <td className="btn-td-item">
                                            <button className="btn-add" onClick={() => handleChangeQuantity(x.id, "incre")}>+</button>
                                            <span style={{ margin: "0 8px" }}>
                                                {x.quantity}
                                            </span>
                                            <button className="btn-add" onClick={() => handleChangeQuantity(x.id, "decre")}>-</button>
                                        </td>
                                        <td className="btn-td-item">{converToVND(x.price * x.quantity)}</td>
                                        <td className="btn-td-item">
                                            <button className="btn-xoa" onClick={() => handleChangeQuantity(x.id, "delete")}>Xóa</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <div className="sum-vnd">
                        <div className="sum-text"> Tổng tiền : </div>
                        <div className="sum-text-vnd">{converToVND(sumprice)}</div>
                    </div>

                    <Link to="/receiver-info" onClick={(e) => handlePay(e)} >
                        <button className="btn-tt" > Tiếp tục</button>
                    </Link>
                </div>
                <div className="booter">
                    <div className="booter-zoom">
                        <img className="booter-img" src="https://www.leoasher.dev/static/media/bannerFooter.4b09af08.png" alt=""></img>
                    </div>
                    <div className="booter-petsla-khung">
                        <div className="booter-petsla">
                            <div className="booter-petsla-title">
                                Về Petsla
                            </div>
                            <div className="booter-petsla-text">
                                PetsLa ra đời với sứ mệnh Pets hóa thế giới loài người bằng cách mang đến cho cộng đồng những content thú vị, đáng yêu về pets.
                            </div>
                        </div>
                        <div className="booter-petsla">

                        </div>
                        <div className="booter-petsla">
                            <div className="booter-petsla-title">
                                Follow Us
                            </div>
                            <div className="icon-khung">
                                <div className="booter-petsla-icon">
                                    <i className="bi bi-facebook booter-petsla-icon-img" ></i>
                                </div>
                                <div className="booter-petsla-icon">
                                    <i className="bi bi-instagram booter-petsla-icon-img"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
            <div>
                <div className="cart-null">
                    <img className="cart-null-img" src="https://www.leoasher.dev/static/media/sadCat.2335333f.png" alt=""></img>
                    <br></br>
                    <label className="cart-null-label">Không có sản phẩm nào trong giỏ hàng!</label>
                </div>
                <div className="booter">
                <div className="booter-zoom">
                    <img className="booter-img" src="https://www.leoasher.dev/static/media/bannerFooter.4b09af08.png" alt=""></img>
                </div>
                <div className="booter-petsla-khung">
                    <div className="booter-petsla">
                        <div className="booter-petsla-title">
                            Về Petsla
                        </div>
                        <div className="booter-petsla-text">
                            PetsLa ra đời với sứ mệnh Pets hóa thế giới loài người bằng cách mang đến cho cộng đồng những content thú vị, đáng yêu về pets.
                        </div>
                    </div>
                    <div className="booter-petsla">

                    </div>
                    <div className="booter-petsla">
                        <div className="booter-petsla-title">
                            Follow Us
                        </div>
                        <div className="icon-khung">
                            <div className="booter-petsla-icon">
                                <i className="bi bi-facebook booter-petsla-icon-img" ></i>
                            </div>
                            <div className="booter-petsla-icon">
                                <i className="bi bi-instagram booter-petsla-icon-img"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
const mapStateToProps = (state) => {
    return {
        listItem: state.cart
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