import axios from "axios";
import * as Config from "../constants/ConfigApi";

export default function ApiCaller(endpoint,method = "GET",body){
    return axios({
        method:method,
        url:`${Config.API_URL_GETITEM}${endpoint}`,
        data:body
        
    }).catch(err => {
        console.log("loi")
    })
}