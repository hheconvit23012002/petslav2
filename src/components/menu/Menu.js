import React from "react";
import { Link } from 'react-router-dom'
function Menu() {
    return (
        <div>
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
                                <img src="/static/media/logofull.f2aa3784.png" alt="" className="logo_img"/>
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
                                
                                <Link to="login">
                                    <i className="bi bi-box-arrow-in-left">
                                        
                                    </i>
                                </Link>
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
                                <img src="https://www.leoasher.dev/static/media/logofull.f2aa3784.png" alt="" className="logo_img"/>
                            </a>
                        </div>
                        <div className="header_input-search">
                            <form >
                                <div className="cover-input">
                                    <input type="text" name="" className="input"
                                        placeholder="Everything here is better than your ex"/>
                                        <button className="search-btn">
                                            <i className="bi bi-search"></i>
                                        </button>
                                </div>
                            </form>
                        </div>
                        <div className="header_cart">
                            <div className="cover-cart">
                                <i className="bi bi-cart3"></i>
                                <div className="text-has-hover">title.cart</div>
                                <span className="number_cart">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-nav">
                <div className="grid wide">
                    <ul className="list-nav">
                        <li className="nav-item">
                            <a href="/#" className="nav-item-link">title.homepage</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-item-link" >title.shop</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-item-link">title.cart</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-item-link">title.contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#" className="nav-item-link">title.account</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Menu