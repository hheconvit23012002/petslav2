import { combineReducers } from "redux";
import task from "./task"
import login from "./login"
import status from "./status"
import profile from "./profile"
import token from "./token"
import cart from "./cart"
const myReducers = combineReducers({
    task,
    login,
    status,
    profile,
    token,
    cart
})

export default myReducers