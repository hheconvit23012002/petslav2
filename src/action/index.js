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


//sssss
export const ShowItem=(product) => {
    return {
        type:types.SHOW_ITEM,
        product
    }
}


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
export const addToCart = (data) => {
    return {
        type:types.ADD_TO_CART,
        data
    }
}
export const updateCart = (id,typeUpdate) => {
    return {
        type: types.UPDATE_CART,
        id,
        typeUpdate
    }
}


export const deleteCart = () => {
    return {
        type:types.DELETE_CART
    }
}

export const sortProduct= (value) => {
    return {
        type:types.SORT_PRODUCT,
        value
    }
}
export const callApigetProductDetail = (id) => {
    return dispatch => {
        return ApiCaller(`/product/${id}`,'GET',null).then(res => {
            dispatch(productDetail(res.data))
        })
    }
}
export const productDetail = (data) => {

    return {
        type:types.PRODUCT_DETAIL,
        data
    }
}
export const search = (data,list) => {
    return {
        type:types.SEARCH,
        data,
        list
    }
} 
