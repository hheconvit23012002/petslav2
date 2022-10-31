import * as types from "../constants/ConfjgType"

var initialState = []

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_ITEM:
            state = action.product
            return [...state]
        default: return state
    }
} 
export default myReducers