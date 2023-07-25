import axios from 'axios'

const rootApi = process.env.REACT_APP_ROOTAPI;

const adminApi = rootApi + "/admin"

const axiosProcessor = async ({method, url, obj}) => {
    console.log(adminApi)
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


// ========= cms admin ===========
export const postNewAdmin = (data) =>{
    const obj = {
        method: 'post',
        url: adminApi,
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