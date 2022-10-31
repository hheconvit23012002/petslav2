import * as types from "./../constants/ConfjgType";
import ApiCaller from "./../utills/ApiCaller"

export const callApiGetItem = () => {
    return dispatch => {
        return ApiCaller('','GET',null).then(res => {
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