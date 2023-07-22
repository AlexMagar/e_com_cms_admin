import axios from 'axios'

const rootApi = process.env.REACT_APP_ROOTAPI;
const adminApi = rootApi + "/admin"

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


// ========= cms admin ===========
export const postNewAdmin = (data) =>{
    const obj = {
        method: 'post',
        url: adminApi,
        obj: data
    }
    return axiosProcessor(obj)
}

// export const fetchCms = async () => {
//     try {
//         const {data} = await axios.get(adminApi);
//         return data;
//     } catch (error) {
//         return({
//             status: "error",
//             message: error.message
//         })
//     }
// }


