import {toast} from "react-toastify"
import { postNewAdmin, loginAdmin } from '../../helper/axios';


export const createNewAdminAction = async (obj) =>{
    const pendingResp = postNewAdmin(obj)
    console.log(pendingResp)
    toast.promise(pendingResp, {
        pending: "Please await...."
    })
    const {status, message} = await pendingResp;
    toast[status](message)

}

export const loginAdminAction = async (obj) =>{
    const pendingResp = loginAdmin(obj)

    toast.promise(pendingResp, {
        pending: "Please wait...."
    })

    const {status, message, token} = await pendingResp;

    console.log("adminAction token: ", token)

    toast[status](message)

    if(status === "success"){
        sessionStorage.setItem("accessJWT", token.accessJWT);
        localStorage.setItem("refreshJWT", token.refreshJWT)
    }
}