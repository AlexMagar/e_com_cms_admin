import {toast} from "react-toastify"
import { postNewAdmin, updateEmailVerification } from '../../helper/axios';

export const createNewAdminAction = async (obj) => {
    
    const pendingResp = postNewAdmin(obj)

    toast.promise(pendingResp, {
        pending: "Please await...."
    })
    const {status, message} = await pendingResp;
    toast[status](message)
}

export const verifyAdminEmail = async (email, code) =>{
    updateEmailVerification(email, code)
    console.log(email, code)
}
