import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as actions from './../../action/index';
import './account.css';
function Account(props) {
    props.onGetToken();
    useEffect(() => {
        if (props.token !== "") {
            props.onCallApiFetchDataUser(props.token);
        }
    }, [props.token]) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            {
                sessionStorage.getItem("token") && sessionStorage.getItem("sait") != null ?
                    <div className="account-background">
                        <div className="acc-khung">
                            <div>
                                <div className="account-list">
                                    <div className="account-list-label"> DASHBOARD </div>
                                    <div className="account-list-text">
                                        <i class="bi bi-person"></i> Profile </div>
                                    <div className="account-list-text">
                                        <i class="bi bi-bag"></i> Orders </div>
                                    <div className="account-list-text">
                                        <i class="bi bi-heart"></i> Wishlist </div>
                                </div>
                            </div>
                            <div className="account-info">

                                <div className="label-acc">
                                    <i className="bi bi-person-fill acc-icon">  </i>
                                    My profile
                                </div>
                                <div className="account-info-text">
                                    <div className="acc-fullname">
                                        <div className="acc-fullname-label"> Tên: </div>
                                        <div className="acc-fullname-text">{props.profile.name}</div>
                                    </div>
                                    <div className="acc-fullname">
                                        <div className="acc-fullname-label"> Email: </div>
                                        <div className="acc-fullname-text">{props.profile.email}</div>
                                    </div>
                                    <div className="acc-fullname">
                                        <div className="acc-fullname-label"> Username: </div>
                                        <div className="acc-fullname-text">{props.profile.username}</div>
                                    </div>
                                    <div className="acc-fullname">
                                        <div className="acc-fullname-label"> Số điện thoại: </div>
                                        <div className="acc-fullname-text"> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div> :
                    window.location.href = "./login"
            }
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
                                <i class="bi bi-instagram booter-petsla-icon-img"></i>
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
        profile: state.profile,
        token: state.token
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetToken: () => {
            dispatch(actions.GetToken())
        },
        onCallApiFetchDataUser: (token) => {
            dispatch(actions.CallApiGetUser(token))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Account);