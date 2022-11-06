import { combineReducers } from "redux";
import task from "./task"
import customer from "./customer"
import status from "./status"
const myReducers = combineReducers({
    task,
    customer,
    status
})

export default myReducers