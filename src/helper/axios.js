import axios from 'axios'

const rootApi = process.env.REACT_APP_ROOTAPI;
const adminApi = rootApi + "/admin"
const categoryApi = rootApi + "/category"
const poApi = rootApi + "/payment-option"

const getAccessJWT = () => {
    return sessionStorage.getItem("accessJWT")
}

const getRefreshJWT = () => {
    return localStorage.getItem("refreshJWT")
}

const axiosProcessor = async ({method, url, obj, isPrivate, refreshToken}) => {
    
    const token = refreshToken ? getRefreshJWT() : getAccessJWT()

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
export const getAdminInfo = (data) =>{
    const obj ={
        method: 'post',
        url: adminApi,
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

export const gettNewPOs = () =>{
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
        obj: data,
        url: poApi,
        isPrivate: true
    }
    return axiosProcessor(obj)
}

export const deletePO = () =>{
    const obj ={
        method: 'delete',
        url: poApi + "/" + _id,
        isPrivate: true
    }
    return axiosProcessor(obj)
}

