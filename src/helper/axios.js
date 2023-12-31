import axios from 'axios'

const rootApi = process.env.REACT_APP_ROOTAPI;
const adminApi = rootApi + "/admin"
const categoryApi = rootApi + "/category"
const poApi = rootApi + "/payment-option"
const productApi = rootApi + "/product"

const getAccessJWT = () => {
    return sessionStorage.getItem("accessJWT")
}

const getRefreshJWT = () => {
    return localStorage.getItem("refreshJWT")
}

const axiosProcessor = async ({method, url, obj, isPrivate, refreshToken}) => {
    
    const token = refreshToken ? getRefreshJWT() : getAccessJWT()
    console.log("axios test: ". obj)
    const headers = {
        Authorization: isPrivate ? token : null
    }
    try {
        const {data} = await axios({
            method,
            url,
            data: obj, 
            headers
        })
        return data
    } catch (error) {
        if(error?.response?.status === 403 && error?.response?.data?.message === "jwt expired"){
            // console.log("user refreshJWT to request new accessJWT and recall the function again")

            // 1. get new accessJWT
            const {status, accessJWT} = await getNewAccessJWT();
            if(status === "success" && accessJWT){
                sessionStorage.setItem("accessJWT", accessJWT)
            }

            // 2. continue the request
            return axiosProcessor({method, url, obj, isPrivate, refreshToken})
        }
        return{ 
            status: 'error',
            message: error.response ? error?.response?.data?.message : error.message,
        }
    }
}

// ========= admin api ===========
export const getAdminInfo = () =>{
    const obj ={
        method: 'get',
        url: adminApi,
        isPrivate: true
    }
    return axiosProcessor(obj)
}
export const getAdminDisplay = () =>{
    const obj ={
        method: 'get',
        url: adminApi + "/display",
        isPrivate: true
    }
    return axiosProcessor(obj)
}

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
        isPrivate: true
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


// ========== get new refreshJWT =========== 

export const getNewAccessJWT = () =>{
    const obj = {
        method: 'get',
        url: adminApi + "/get-accessjwt",
        isPrivate: true,
        refreshToken: true
    }
    return axiosProcessor(obj)
}

export const logoutAdmin = (_id) =>{
    const obj ={
        method: 'post',
        url: adminApi + "/logout",
        obj: {
            _id,
            accessJWT : getAccessJWT(),
            refreshJWT: getRefreshJWT()
        }
    }
    return axiosProcessor(obj)
}

// ========== Payment Option =========== 

export const postNewPO = (data) =>{
    const obj ={
        method: 'post',
        url: poApi,
        obj: data,
        isPrivate: true
    }
    return axiosProcessor(obj)
}

export const getNewPOs = () =>{
    const obj ={
        method: 'get',
        url: poApi,
        isPrivate: true
    }
    return axiosProcessor(obj)
}

export const updateNewPOs = (data) =>{
    const obj ={
        method: 'put',
        url: poApi,
        obj: data,
    }
    return axiosProcessor(obj)
}

export const deletePO = (_id) =>{
    const obj ={
        method: 'delete',
        url: poApi + "/" + _id,
        isPrivate: true
    }
    return axiosProcessor(obj)
}

// ========== product =========
export const postNewProduct = (data) =>{
    const obj ={
        method: 'post',
        url: productApi,
        obj: data,
        isPrivate: true
    }
    return axiosProcessor(obj)
}

export const updateProduct = (data) =>{
    const obj = {
        method: 'put',
        url: productApi,
        obj: data,
        isPrivate: true,
    }
    return axiosProcessor(obj)
}

export const getProduct = (_id) =>{
    const obj ={
        method: 'get',
        url: _id ? productApi + "/" + _id : productApi,
        isPrivate: true
    }
    return axiosProcessor(obj)
}

export const deleteProduct = (_id) =>{
    const obj ={
        method: 'delete',
        url: productApi + "/" + _id,
        isPrivate: true
    }
    return axiosProcessor(obj)
}

// === reset password ======

export const requestPassOTP = (email) =>{
    const obj ={
        method: 'post',
        url: adminApi + "/requst-opt",
        obj: {email},
    }
    return axiosProcessor(obj)
}

export const resetPass = (data) =>{
    const obj = {
        method: 'post',
        url: adminApi + "/reset-password",
        obj: data
    }
    return axiosProcessor(obj)
}

// ============= Profile ============
export const updataeProfile = (data) => {
    const obj = {
        method: 'put',
        url: adminApi + "/profile",
        obj: data
    }
    console.log(data)
    return axiosProcessor(obj)
}

export const updateProfilePassword = (data) => {
    const obj = {
        method: "put",
        url: adminApi + "/profilePassword",
        obj: data
    }
    return axiosProcessor(obj)
}