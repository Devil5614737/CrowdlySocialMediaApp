import axios from "axios";

export const request=axios.create({
    baseURL:"https://socialmediabackendnew-production.up.railway.app/api",
    headers:{
        'x-auth-token':localStorage.getItem('token')
    }
})