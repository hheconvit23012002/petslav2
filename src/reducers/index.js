import { combineReducers } from "redux";
import task from "./task"
import login from "./login"
import status from "./status"
import profile from "./profile"
import token from "./token"
const myReducers = combineReducers({
    task,
    login,
    status,
    profile,
    token
})

export default myReducers