import * as types from "./../constants/ConfjgType"

let initialState = ""

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TOKEN:
            if (sessionStorage.getItem("sait") !== null && sessionStorage.getItem("token")!== null) {
                let ans = sessionStorage.getItem("sait")
                let token = atob(sessionStorage.getItem("token"))
                let idx = token.lastIndexOf(ans)
                let res = token.slice(0, idx)
                return res
            }
            return ""
        case types.DELETE_TOKEN:
            return ""
        default: return state
    }
}
export default myReducers