
import * as types from "../constants/ConfjgType"

var initialState = []

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_ITEM:
            state = action.product
            return [...state]
        case types.SORT_PRODUCT:
            let value = action.value
            if(value === '0'){
                return [...state]
                // console.log(list)
            }else if(value === '1'){
                let list = state
                list.sort((x,y) => {
                    return x.product_name.localeCompare(y.product_name)
                })
                return [...list]
            }else if(value === '2'){
                let list = state
                list.sort((x,y) => {
                    return y.product_name.localeCompare(x.product_name)
                })
                console.log(list)
                return [...list]
            }else if(value === '3'){
                let list = state
                list.sort((x,y) => {
                    return x.price - y.price
                })
                return [...list]
            }else if(value === '4'){
                let list = state
                list.sort((x,y) => {
                    return y.price - x.price
                })
                return [...list]
            }
            return [...state]
        default: return state
    }
} 
export default myReducers