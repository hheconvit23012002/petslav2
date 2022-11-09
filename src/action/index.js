import * as types from "./../constants/ConfjgType";
import ApiCaller from "./../utills/ApiCaller";
import ApiCallerHeader from "../utills/CallApiGetProfile";
export const callApiGetItem = () => {
    return dispatch => {
        return ApiCaller('/products/','GET',null).then(res => {
            dispatch(ShowItem(res.data))
        })
    }
}
export const ShowItem=(product) => {
    return {
        type:types.SHOW_ITEM,
        product
    }
}
// export const callApiLogin = (user) => {
    
//     return dispatch => {
//         return ApiCaller('/login/','POST',user).then(res => {
//             dispatch(saveLogin(res.data.token))
//         }).catch(err => {
//             console.log("day")
//             sessionStorage.err = err
//         })
//     }
// }

export const saveLogin = (token) => {
    return {
        type: types.LOGIN,
        token
    }
}
export const changeStatus = (status) => {
    return {
        type: types.STATUS,
        status
    }
}

export const CallApiGetUser = (token) => {
    return dispatch => {
        return ApiCallerHeader('/profile/','GET',null,token).then(res => {
            dispatch(ShowProfile(res.data))
        })
    }
}
export const ShowProfile = (data) => {
    return {
        type : types.SHOW_PROFILE,
        data
    }
}
export const GetToken = () => {
    return {
        type : types.GET_TOKEN
    }
}  
export const deleteToken = () => {
    return {
        type: types.DELETE_TOKEN
    }
}
// cong viec tiep la tao redux login call api login


