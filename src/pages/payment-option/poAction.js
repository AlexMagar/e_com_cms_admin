import { postNewPO } from "../../helper/axios"


export const addNewPOAction = data => async (dispatch) =>{
    const { status, message } = await postNewPO(data)

    toast[status](message)
}