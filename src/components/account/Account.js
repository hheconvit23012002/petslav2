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
                        <div className="label-acc">
                        <i class="bi bi-person-fill acc-icon">  </i>
                            My profile
                        </div>
                        <div className="acc-fullname">
                            <div className="acc-fullname-label"> fullName: </div>
                            <div className="acc-fullname-text">{props.profile.name}</div>
                        </div>
                        <br></br>
                        <div className="acc-fullname">
                            <div className="acc-fullname-label"> email: </div>
                            <div className="acc-fullname-text">{props.profile.email}</div>
                        </div>
                        <br></br>
                        <div className="acc-fullname">
                            <div className="acc-fullname-label"> username: </div>
                            <div className="acc-fullname-text">{props.profile.username}</div>
                        </div>
                        <br></br>
                        </div>
                    </div> :
                    window.location.href = './login'
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