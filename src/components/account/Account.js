import React, { useEffect } from "react";
import { connect } from 'react-redux';
import * as actions from './../../action/index'
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
                    <div>
                        fullName
                        <div>{props.profile.name}</div>
                        email
                        <div>{props.profile.email}</div>
                        username
                        <div>{props.profile.username}</div>
                    </div> :
                    <h1>Đăng nhập đi</h1>
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