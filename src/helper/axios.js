import axios from 'axios'

const rootApi = process.env.REACT_APP_ROOTAPI;

const adminApi = rootApi + "/admin"

const categoryApi = rootApi + "/category"

const axiosProcessor = async ({method, url, obj}) => {
    try {
        
        const {data} = await axios({
            method,
            url,
            data: obj
        })
        return data
    } catch (error) {
        return{
            status: 'error',
            message: error.response ? error?.response?.data?.message : error.message,
        }
    }
}

// ========= admin api ===========
export const postNewAdmin = (data) =>{
    const obj ={
        method: 'post',
        url: adminApi,
        obj: data
    }
    return axiosProcessor(obj)
}

export const loginAdmin = (data) =>{
    console.log("From axios login admin ", data)
    const obj = {
        method: 'post',
        url: adminApi + "/login",
        obj: data
    }
    return axiosProcessor(obj)
}

export const postNewAdminVerificationInfo =(data) =>{
    const obj ={
        method: 'post',
        url: adminApi + "/admin-verification",
        obj: data
    }
    return axiosProcessor(obj)
}

// ========= email verifation =======
export const updateEmailVerification = (email, code) =>{
    console.log("we are in email action verification and need put method")
}

// ============= category ============
export const postNewCategory = (data) =>{

    console.log("axios category: ", data)
    const obj = {
        method: 'post',
        url: categoryApi,
        obj: data
    }
    return axiosProcessor(obj)
}

export const getCategory = () =>{

    const obj = {
        method: 'get',
        url: categoryApi,
    }
    return axiosProcessor(obj)
}


export const  updateCategory = (data) =>{
    const obj ={
        method: "put",
        url: categoryApi,
        obj: data
    }
    return axiosProcessor(obj)
}

export const deleteCategory = (_id) =>{
    const obj = {
        method: "delete",
        url: categoryApi + "/" + _id
    }
    return axiosProcessor(obj)
}