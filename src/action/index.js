import * as types from "./../constants/ConfjgType";
import ApiCaller from "./../utills/ApiCaller"
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
// cong viec tiep la tao redux login call api login
