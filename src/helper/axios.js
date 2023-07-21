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

export const fetchCms = async () => {
    try {
        const {data} = await axios.get(cmsApi);
        return data;
    } catch (error) {
        return({
            status: "error",
            message: error.message
        })
    }
}