import {toast} from "react-toastify"
import { postCms, fetchCms } from '../../helper/axios';
import { setCms } from "./cmsSlice";

export const postCmsAction = (obj) => async (dispatch) =>{
    const dataPending = postCms(obj);

    toast.promise(dataPending, {
        pending: "Plese wait....."
    })

    const {status, message} = await dataPending;
    toast[status](message);
    if(status === 'success'){
        dispatch(fetchCmsAction());
    }
}

export const fetchCmsAction = () => async (dispatch) =>{
    const {status, cms} = await fetchCms();

    if(status === "success"){
        dispatch(setCms(cms));
    }
}