import { api } from "../services/api"
import { toast } from "react-toastify"
// Type //
import User, { UserUpdateProps } from "../types/User"

export const useUsers = () => {

    // GET USER //
    async function getAllUsers() {
        const data: User[] = await api.get('/users')
            .then(res => {
                return res.data
            })
            .catch(error => toast.error(error.response.data.message))
    
        return data
    }

    // GET USER BY REF //
    async function getUserByRef(waiterRef: number) {
        const data: User[] = await api.get(`users/${waiterRef}`)
            .then(res => {
                return res.data
            })
            .catch(error => toast.error(error.response.data.message))

        return data
    }

    // POST USER //
    async function createUser(user: any) {
        const data: UserUpdateProps = user

        const response = await api.post(`users/`, data)
            .then(res => {
                toast.success('Usuário criado')
                return res.data
            })
            .catch(error => toast.error(error.response.data.message))

        return response as User
    }

    // PUT USER //
    async function updateUser(user: any) {
        const data: UserUpdateProps = user

        const response = await api.put(`users/${user.id}`, data)
            .then(res => {
                toast.success('Dados atualizados')
                return res.data
            })
            .catch(error => toast.error(error.response.data.message))

        return response
    }

    // DELETE USER //
    async function deleteUser(userID: number) {
        await api.delete(`/users/${userID}`)
            .then(_ => toast.success('Usuário Excluído'))
            .catch(error => toast.error(error.response.data.message))
    }

    return { getAllUsers, getUserByRef, createUser, deleteUser, updateUser }
}