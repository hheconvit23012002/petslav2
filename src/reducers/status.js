import * as types from "../constants/ConfjgType"


var initialState = false
if(sessionStorage.getItem("token") != null){
    initialState = true
}


var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.STATUS:
            state = action.status
            return state
        default: return state
    }
} 
export default myReducers