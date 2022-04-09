import { api } from "../services/api"
import { toast } from "react-toastify"
 // Type //
import User from "../types/User"

export const useUsers = () => {

    // GET USER //
    async function getAllUsers() {
        const data: User[] = await api.get('/users')
            .then(res => {
                console.log(res.data)
                return res.data
            })
            .catch(error => toast.error(error.response.data.message))

        return data
    }

    return { getAllUsers }
}