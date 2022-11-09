import * as types from "./../constants/ConfjgType"

let initialState = ""

var myReducers = (state = initialState,action) =>{
    switch(action.type){
        case types.LOGIN:
            state= action.token
            var sait           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < charactersLength; i++ ) {
                sait += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            let res = state + sait
            let sv = btoa(res)
            sessionStorage.setItem("token",sv)
            sessionStorage.setItem("sait",sait)
            return sait
        default : return state
    }
}
export default myReducers