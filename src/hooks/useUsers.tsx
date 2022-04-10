import { api } from "../services/api"
import { toast } from "react-toastify"
// Type //
import User, { UserUpdateProps } from "../types/User"

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

    // POST USER //


    // PUT USER //
    async function updateUser(user: any) {
        const data: UserUpdateProps = user

        await api.put('/users', data)
            .then(_ => toast.success('Dados atualizados'))
            .catch(error => toast.error(error.response.data.message))
    }

    // DELETE USER //

    return { getAllUsers, updateUser }
}