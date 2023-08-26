import { toast } from "react-toastify"
import { updateProfile } from "../../helper/axios"


export const updateProfileAction = async (obj) =>{

    console.log("Profile Info: ", obj)

    const pendingData = updateProfile(obj)
    toast.promise(pendingData, {
        pending: "Please await"
    })

    const {status, message} = await pendingData
    toast[status](message)

    if(status === "success"){
        return
    }
}
