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

        await api.post(`users/`, data)
            .then(_ => toast.success('Usuário criado'))
            .catch(error => toast.error(error.response.data.message))
    }

    // PUT USER //
    async function updateUser(user: any) {
        const data: UserUpdateProps = user

        await api.put(`users/${user.id}`, data)
            .then(_ => toast.success('Dados atualizados'))
            .catch(error => toast.error(error.response.data.message))
    }

    // DELETE USER //
    async function deleteUser(userID: number) {
        await api.delete(`/users/${userID}`)
            .then(_ => toast.success('Usuário Excluído'))
            .catch(error => toast.error(error.response.data.message))
    }

    return { getAllUsers, getUserByRef, createUser, deleteUser, updateUser }
}