
import { toast } from 'react-toastify';
import { postNewAdmin, loginAdmin, getAdminInfo, getNewAccessJWT, getAdminDisplay } from '../../helper/axios';
import { setAdmin} from "./adminSlice";
import { setAdminList } from './adminListSlice';
import axios from 'axios';

export const createNewAdminAction = async (obj) =>{
    const pendingResp = postNewAdmin(obj)
    
    toast.promise(pendingResp, {
        pending: "Please await...."
    })
    const {status, message} = await pendingResp;
    toast[status](message)

}

export const loginAdminAction = (obj) => async (dispatch) =>{

    console.log("adminAction obj, loginAdminAction: ", obj)
    const pendingResp = loginAdmin(obj)

    console.log(pendingResp)
    toast.promise(pendingResp, {
        pending: "Please wait...."
    })

    const {status, message, token} = await pendingResp;

    toast[status](message);


    if(status === "success"){
        sessionStorage.setItem("accessJWT", token.accessJWT);
        localStorage.setItem("refreshJWT", token.refreshJWT)
        dispatch(getAdminProfileAction())
    }

    //get the user data and mount in the state

}

//get admin profile
export const getAdminProfileAction = () => async (dispatch) =>{
    // call the api to get user info
    const {status, user} = await getAdminInfo();

    //mount the state with the user data
    if(status === "success"){
        dispatch(setAdmin(user))   
    }
}

export const autoLogin = () => async (dispatch) =>{
    //check if accessJWT exit in session

    const accessJWT = sessionStorage.getItem("accessJWT")

    if(accessJWT) {
       return dispatch(getAdminProfileAction())
    }

    const refreshJWT = localStorage.getItem("refreshJWT")
    if(refreshJWT) {
        //request new accessJWT from server and all getAdminProfile
        const { accessJWT } = await getNewAccessJWT();

        if(accessJWT){
            sessionStorage.setItem("accessJWT", accessJWT)
            dispatch(getAdminProfileAction())
        }
    }
}


////// get all the admin
export const getAdminDisplayAction = () => async (dispatch) =>{
    // call the api to get user info
    const {status, user} = await getAdminDisplay();

    //mount the state with the user data, setAdmin() form adminSlice
    if(status === "success"){
        dispatch(setAdminList(user))
    
}}