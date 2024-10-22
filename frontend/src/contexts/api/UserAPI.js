import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class UserAPI  {

    //user login
    static login(values){
        return axios.post(`${BASE_URL}/api/user/login`, values, requestConfigJson);
    }    

    //user register
    static register(values) {
        return axios.post(`${BASE_URL}/api/user/register`, values,  requestConfigJson);
      }

}

export default UserAPI;