import { toast } from "react-toastify"
import { deleteProduct, postNewProduct } from "../../helper/axios"
import { getProducts } from "../../cms-api/src/modles/product/ProductModel.js"


export const postNewProductAction = (data) => async (dispatch) =>{

    const pending = postNewProduct(data)

    toast.promise(pending, {
        pending: "Please wait"
    })

    const {status, message} = await pending

    toast[status](message)

    if(status === 'success'){

    }
}

export const getProductAction = (data) => async (dispatch) =>{

    const {status, message, products} = await getProducts()

    if(status === 'success'){

    }
}

export const deleteProductAction = (_id) => async (dispatch) =>{

    const pending = deleteProduct(_id)

    const{status, message} = await pending

    toast[status](message);

    if(status === 'success'){
        dispatch(getProductAction())
    }
}

