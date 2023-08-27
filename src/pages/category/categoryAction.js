import { setCategory } from "./categorySlice";
import { postNewCategory, getCategory, updateCategory, deleteCategory} from "../../helper/axios";
import { toast } from "react-toastify";

export const createNewCategoryAction = (obj) => async (dispatch) =>{
    const {status, message } = await postNewCategory(obj)
    console.log("from action: ", status, message)

    toast[status](message)
    
    if(status === "success") {
        //call the api to fetch all the cats and mount in the state
        dispatch(getCategoryAction())
    }
}

export const getCategoryAction = () => async (dispatch) =>{
    const {status, result} = await getCategory()
    
    if(status === "success"){
        //mount in the state
        dispatch(setCategory(result))
    }
}

export const updateCategoryAction = (obj) => async (dispatch) =>{
    const respPending = updateCategory(obj);

    toast.promise(respPending, {
        pending: "please wait...."
    })

    const {status, message} = await respPending

    toast[status](message)

    if(status === "success"){
        //call api to fetch all the category and mount in the state
        dispatch(getCategoryAction())
    }
}

export const deleteCategoryAction = (_id) => async (dispatch) =>{
    const respPending = deleteCategory(_id);

    toast.promise(respPending, {
        pending: "Please wait....."
    })

    const {status, message} = await respPending;

    toast[status](message)

    if(status === "success"){
        //call the api to fetch all the cats and mount in the state
        dispatch(getCategoryAction());
    }
}