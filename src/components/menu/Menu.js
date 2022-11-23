import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../../action/index'
import * as toast from '../toast/toast'
function Menu(props) {
    const [check, setCheck] = useState(true)
    const navigate = useNavigate();
    const [ipSearch, setIpSearch] = useState("")
    setTimeout(() => {
        setCheck(() =>{
            return true;
        })
    }, 100);
    function handleLogout(e) {
        setCheck(() =>{
            return true;
        })
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("sait")
        props.onDeleteToken()
        let tmp = false;
        props.onChangeStatus(tmp)
        setCheck(() =>{
            return false;
        })
    }
    function handleChange(e) {
        setIpSearch(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (ipSearch === "") {
            navigate("/")
        } else {
            props.onSearch(ipSearch, props.task)
            navigate(`/?search=${ipSearch}`)
            // const search = searchParams.get('/search')
            // setSearchParams({'search':ipSearch})
        }
    }
    return (
        <div>
            { check ?  null:toast.successLogout()  }
            <div className="cover-header-top" id="test">
                <div className="grid wide">
                    <div className="header-top">
                        <div className="header_contact">
                            <div className="contact-item">
                                <i className="bi bi-envelope"></i>
                                <div className="contact-text">petsla.vn@gmail.com</div>
                            </div>
                            <div className="contact-sub"></div>
                            <div className="contact-item">
                                <i className="bi bi-telephone"></i>
                                <div className="contact-text">0123 456 789</div>
                            </div>
                        </div>
                        <div className="header_logo-tablet">
                            <Link to="" className="header_logo-link">
                                <img src="/static/media/logofull.f2aa3784.png" alt="" className="logo_img" />
                            </Link>
                        </div>
                        <div className="header_settings">
                            <div className="settings-language">
                                <div className="nationaly"></div>
                            </div>
                            <div className="setting-time">
                                <i className="bi bi-moon"></i>
                            </div>
                            <div className="setting-check-log">
                                {
                                    props.status ? <div>
                                        <Link to="/#" onClick={(e) => handleLogout(e)}>
                                            <i className="bi bi-box-arrow-right"></i>
                                        </Link>
                                    </div> :
                                        <Link to="login">
                                            <i className="bi bi-box-arrow-in-left"></i>
                                        </Link>
                                        
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-search">
                <div className="grid wide">
                    <div className="header_width-search">
                        <div className="header_logo">
                            <a href="/#" className="header_logo-link">
                                <img src="https://www.leoasher.dev/static/media/logofull.f2aa3784.png" alt="" className="logo_img" />
                            </a>
                        </div>
                        <div className="header_input-search">
                            <form method="GET" action="" onSubmit={e => handleSubmit(e)}>
                                <div className="cover-input">
                                    <input type="text" name="search" className="input" onChange={e => handleChange(e)}
                                        placeholder="Everything here is better than your ex" value={ipSearch} />
                                    <button className="search-btn">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="header_cart">
                            <Link to="/cart" className="cover-cart">
                                <i className="bi bi-cart3"></i>
                                <div className="text-has-hover">title.cart</div>
                                <span className="number_cart">{props.cart.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-nav">
                <div className="grid wide">
                    <ul className="list-nav">
                        <li className="nav-item">
                            <Link to="/HomePage" className="nav-item-link">title.homepage</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#" className="nav-item-link" >title.shop</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/cart" className="nav-item-link">title.cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-item-link">title.contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/account" className="nav-item-link">title.account</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        status: state.status,
        cart: state.cart,
        task: state.task
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeStatus: (status) => {
            dispatch(actions.changeStatus(status))
        },
        onDeleteToken: () => {
            dispatch(actions.deleteToken())
        },
        onSearch: (data, list) => {
            dispatch(actions.search(data, list))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)