import { combineReducers } from "redux";
import task from "./task"
import customer from "./customer"
const myReducers = combineReducers({
    task,
    customer
})

export default myReducers