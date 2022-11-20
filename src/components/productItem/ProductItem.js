import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import * as actions from "./../../action/index"
import Toast from "../toast/toast";

function ProductItem(props) {
    const [check, setCheck] = useState(false)
    const ElementRef = useRef(null)
    const { id,img, name, price } = props
    function converToVND(value) {
        var test1 = value.toString();
        var x = test1.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        return x;
    }
    function handleAddCart(e){
        setCheck(() => {
            return true
        });
        let tmpID = ElementRef.current.dataset.id
        let resItem = props.task.find(x => {
            return ""+x.id === tmpID
        })
        console.log(resItem)
        console.log(check)
        props.onAddToCart(resItem)
        setTimeout(() => {
            setCheck(() => {
                return false
            });
            
        }, 1000);
    }
    let converted = converToVND(price)
    return (
        <div className="l-3 m-4 c-6 col pd" ref={ElementRef} data-id={id}>
        { check ? <Toast title = 'thanh cong'  message = 'asfasdfasdf'  type = 'success' duration = {3000} />: null }
            <div className="product-item">
                <Link to={`product=${id}`} className="product-item-link">
                    <div className="product-item-img" style={{backgroundImage:`url(http://petsla-api.herokuapp.com${img})`}}></div>
                </Link>
                <div className="product-info">
                    <div className="product-info-text">
                        <Link to={`product=${id}`} className="product-text-link">
                            <span className="product-title">{name}</span>
                        </Link>
                        <div className="product-price">{converted}</div>
                    </div>
                    <div className="product-buy">
                        <div className="buy-btn btn-has-hover">
                            <i className="bi bi-bag"></i>
                            <span className="sub-buy">Buy now</span>
                        </div>
                        <div className="add-cart btn-has-hover" onClick={e => handleAddCart(e)}>
                            
                            <i className="bi bi-cart3"></i>
                            <span className="sub-cart">Add to Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        task : state.task
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddToCart : (data) => {
            dispatch(actions.addToCart(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)