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