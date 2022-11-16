import * as types from "./../constants/ConfjgType"

let initialState = []

let myReducers = (state = initialState,action) => {
    switch(action.type){
        case types.SEARCH:
            let ipSearch = action.data
            state = action.list.filter(x => {
                if(x.product_name.indexOf(ipSearch) !== -1){
                    return x
                }else return null
            })
            return [...state]
        default: return state
    }
}
export default myReducers