import axios from 'axios'

const rootApi = "http://localhost:8000"
const cmsApi = rootApi + "/api/v1/cms"

// ========= cms ===========
export const postCms = (cmsData) =>{
    try {
        const { data } = axios.post(cmsApi, cmsData)

        return data;
    } catch (error) {
        return({
            status: "error",
            message: error.message,
        })
    }
}