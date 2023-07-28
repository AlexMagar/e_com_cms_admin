import { setCategory } from "./categorySlice";
import { postNewCategory, categoryItems} from "../../helper/axios";

export const createNewCategory = (obj) => async (dispatch) =>{
    const {status, message, title} = await postNewCategory(obj)
    console.log("from action: ", status, message, title)
    
    title?._id && dispatch(setCategory(title))
}
