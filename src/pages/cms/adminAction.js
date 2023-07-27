import {toast} from "react-toastify"
import { postNewAdmin, updateEmailVerification, loginAdmin } from '../../helper/axios';
import { setAdmin } from "./adminSlice";

export const createNewAdminAction = async (obj) =>{
    const pendingResp = postNewAdmin(obj)
    console.log(pendingResp)
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

export const fetchAdminAction = (obj) => async (dispatch) =>{
    const {status, message, user} = await loginAdmin(obj);
    console.log("action fetch admin action: ", status, message, user)

    user?._id && dispatch(setAdmin(user))

}
