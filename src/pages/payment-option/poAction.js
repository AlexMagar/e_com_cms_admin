import { toast } from "react-toastify"
import { gettNewPOs, postNewPO } from "../../helper/axios"
import { setPaymentOptions } from "./poSlice";

export const addNewPOAction = data => async (dispatch) =>{
    const { status, message } = await postNewPO(data)

    toast[status](message)

    status === "success" && dispatch(getOPsAction())

}

export const getOPsAction = () => async (dispatch) =>{
    
    //fetch the data and also dispatch function created in Slice
    const {status, result} = await gettNewPOs()

    status === "success" && dispatch(setPaymentOptions(result))
}