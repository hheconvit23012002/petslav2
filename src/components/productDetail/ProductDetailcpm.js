import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from './../../action/index'
import './ProductDetailcpm.css'
function ProductDetailcpm(props) {
    let param = useParams()
    let {item} = props
    useEffect(() => {
        props.onGetItem(param.id)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    function handleAdd(e,items){
        props.onAddToCart(items)
    }
    function converToVND(value) {
        var test1 = value.toString();
        var x = test1.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        return x;
    }
    return (
        !!item && item.id+"" === param.id && 
        <div className="container-page-cart">
            <div className="grid wide">
                <div className="row useInnerHTML">
                    <div className="l-6 c-12 m-6 col" style={{ borderRadius: '4px' }}>
                        <div className="product-img" style={{ backgroundImage: `url(http://petsla-api.herokuapp.com${item.images})`, borderRadius: '4px' }} />
                    </div>
                    <div className="l-6 c-12 m-6 col">
                        <h1 className="title-product">{item.product_name}</h1>
                        <div className="product-price">
                            <span>{converToVND(item.price)}</span>
                        </div>
                        <div className="btn-wrap">
                            <button className="buy-in-cart-btn">Buy Now</button>
                            <button className="add-in-cart-btn" onClick={e => handleAdd(e,item)} >Add to Cart</button>
                        </div>
                        <div className="product-desc">
                            <h3 className="title-desc">Thông tin sản phẩm</h3>
                            <div className="text-desc">{item.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
const mapStateToProps = (state) => {
    return {
        item: state.profile
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetItem: (id) => {
            dispatch(actions.callApigetProductDetail(id))
        },
        onAddToCart : (data) => {
            dispatch(actions.addToCart(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailcpm)