import { toast } from "react-toastify"
import { deleteProduct, getProduct, postNewProduct, updateProduct } from "../../helper/axios"
import { setProducts } from "./productSlice"

export const postNewProductAction = (data) => async (dispatch) =>{

    const pending = postNewProduct(data)

    toast.promise(pending, {
        pending: "Please wait"
    })

    const {status, message} = await pending

    toast[status](message)

    if(status === 'success'){
        dispatch(getProductAction())
    }
}

export const updateProductAction = (data) => async (dispatch) => {
    const pending = updateProduct(data);
  
    toast.promise(pending, {
      pending: "Please wait",
    });
  
    const { status, message } = await pending;
  
    toast[status](message);
  
    if (status === "success") {
      /// fetch all the products
      dispatch(getProductAction());
      return true;
    }
    return false;
  };


export const getProductAction = () => async (dispatch) =>{

    const {status, products} = await getProduct();

    if(status === 'success'){
        //mount data in the store
        dispatch(setProducts(products))
    }
}

export const deleteProductAction = (_id) => async (dispatch) =>{

    const pending = deleteProduct(_id)

    toast.promise(pending, {
        pending: "please await ....",
    })

    const{status, message} = await pending

    toast[status](message);

    if(status === 'success'){
        dispatch(getProductAction())
        return true
    }

    return false
}

