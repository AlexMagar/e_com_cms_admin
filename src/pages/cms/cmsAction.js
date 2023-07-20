import { toast } from 'react-toastify'
import { postCms } from '../../helper/axios';

export const postCmsAction = async (obj) => {
    const dataPending = postCms(obj);

    // toast.promise(dataPending, {
    //     pending: "Plese wait....."
    // })

    // const {status, message} = await dataPending;
    // toast[status](message)
}