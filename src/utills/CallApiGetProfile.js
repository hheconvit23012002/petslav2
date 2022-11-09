import axios from "axios";
import * as Config from "../constants/ConfigApi";

export default function ApiCallerHeader(endpoint,method = "GET",body,token){
    return axios({
        method:method,
        url:`${Config.API_URL}${endpoint}`,
        data:body,
        headers:{
            'Authorization' : "Bearer " + token 
        }
        // withCredentials: true
    })
}
