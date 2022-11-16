import * as types from "./../constants/ConfjgType"

let initialState = JSON.parse(localStorage.getItem("cart")) || []

let myReducers = (state = initialState,action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            let res = action.data
            let checkItem = state.find(x => {
                return x.id === res.id
            })
            if(checkItem === undefined){
                res.quantity = 1
                state.push(res)
            }else{
                checkItem.quantity +=1
            }
            localStorage.setItem("cart",JSON.stringify(state))
            return [...state]
        case types.UPDATE_CART:
            let id = action.id
            let type = action.typeUpdate
            let item = state.find(x => {
                return id === x.id
            })
            if(type === "incre"){
                item.quantity +=1
            }else if(type === "decre"){
                if(item.quantity > 1){
                    item.quantity -=1
                }else{
                    state = state.filter(x => {
                        return x.id !== id
                    })
                }
            }else{
                state = state.filter(x => {
                    return x.id !== id
                })
            }
            localStorage.setItem("cart",JSON.stringify(state))
            return [...state]
        case types.DELETE_CART:
            localStorage.removeItem("cart")
            state = []
            return [...state]
        default: return state
    }
}
export default myReducers