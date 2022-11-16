import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as actions from './../../action/index'
import ProductItem from "./../productItem/ProductItem"
function ProductList(props) {
    useEffect(() => {
        if(props.task.length === 0){
            props.onCallApiFetchData();
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    const [pageCurent,setPageCurent] = useState(1)
    const [productOnPage,setProductOnPage] = useState(12)
    let res = []
    let arrNumPage = []
    let numberPage = Math.ceil(props.task.length/productOnPage)
    for(let i=1;i<=numberPage;i++){
        arrNumPage.push(i)
    }
    res = props.task.slice((pageCurent-1)*productOnPage,(pageCurent-1)*productOnPage + productOnPage)
    const handleChangePage = (value) => {
        setPageCurent(value);
    }
    const handleSort = (e) => {
        props.onSort(e.target.value)
    }
    const handleChangeProduct = (e) => {
        setPageCurent(() => {return 1})
        setProductOnPage(() => {return e.target.value})
    }
    return (
        <div>
            <div className="container">
                <div className="grid wide">
                    <div className="tool-search">
                        <select onChange={e => handleSort(e)}>
                            <option value={0}>Relevance</option>
                            <option value={1}>Name : A-Z</option>
                            <option value={2}>Name : Z-A</option>
                            <option value={3}>Price : Low to High</option>
                            <option value={4}>Price : High to Low</option>
                        </select>
                    </div>
                    <div className="row cover-container">
                        {
                            res.map((value, index) => {
                                return (
                                    <ProductItem key={value.id} img={value.images} id={value.id} name={value.product_name} price={value.price} />
                                )
                            })
                        }
                    </div>
                    <div className="btn-page-product">
                        <div className="list-page">
                            <button className="arrow-left-page">
                                <i className="bi bi-arrow-left"></i>
                            </button>
                            <div className="list">
                                {
                                    arrNumPage.map(value => {
                                        return(
                                            <button className={pageCurent===value ? "page_currunt" : ""} key={value} id={value} onClick={() => handleChangePage(value)}>{value}</button>
                                        )
                                    })
                                }
                            </div>
                            <button className="arrow-right-page">
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                        <div className="type-amount">
                            <span >title.item/title.page</span>
                            <select name="amount-in-page" onChange={(e) => handleChangeProduct(e)} id="amount-in-page">
                                <option value="12">12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-nav">
                <ul className="button-nav-list">
                    <li className="button-nav-item">
                        <a href="/#" className="button-nav-link">
                            <div className="item-wrap">
                                <i className="bi bi-house height"></i>
                                <span className="text">title.homepage</span>
                            </div>
                        </a>
                    </li>

                    <li className="button-nav-item">
                        <a href="/#" className="button-nav-link" >
                            <div className="item-wrap">
                                <i className="bi bi-shop-window height"></i>
                                <span className="text">title.shop</span>
                            </div>
                        </a>
                    </li>

                    <li className="button-nav-item">
                        <a href="/#" className="button-nav-link">
                            <div className="item-wrap">
                                <i className="bi bi-cart3 height"></i>
                                <span className="text">title.cart</span>
                            </div>
                        </a>
                    </li>

                    <li className="button-nav-item">
                        <a href="/#" className="button-nav-link">
                            <div className="item-wrap">
                                <i className="bi bi-person height"></i>
                                <span className="text">title.account</span>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
            <div className="overlay">

            </div>
            <div className="nav-cart">
                <div className="title-cart">
                    <div className="title-text">
                        title.cart: 0 title.item
                    </div>
                    <div className="exit">
                        <i className="bi bi-x-lg"></i>
                    </div>
                </div>
                <div className="container-cart">
                </div>
                <div className="footer-cart">
                    <button className="checkout-price">title.checkout (0đ)</button>
                    <button className="checkout-cart">title.view title.cart</button>
                </div>
            </div>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        task: state.task,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onCallApiFetchData: () => {
            dispatch(actions.callApiGetItem())
        },
        onSort : (value) => {
            dispatch(actions.sortProduct(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);