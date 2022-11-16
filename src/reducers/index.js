import { combineReducers } from "redux";
import task from "./task"
import login from "./login"
import status from "./status"
import profile from "./profile"
import token from "./token"
import cart from "./cart"
import search from "./search"
const myReducers = combineReducers({
    task,
    login,
    status,
    profile,
    token,
    cart,
    search
})

export default myReducers