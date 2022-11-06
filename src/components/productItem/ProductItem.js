import React from "react";
import { Link } from "react-router-dom";
function ProductItem(props) {
    const { id,img, name, price } = props
    function converToVND(value) {
        var test1 = value.toString();
        var x = test1.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        return x;
    }
    let converted = converToVND(price)
    return (
        <div className="l-3 m-4 c-6 col pd" data-id={id}>
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
                        <div className="add-cart btn-has-hover" >
                            <i className="bi bi-cart3"></i>
                            <span className="sub-cart">Add to Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem