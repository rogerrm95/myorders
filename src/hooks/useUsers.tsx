import { api } from "../services/api"
import { toast } from "react-toastify"

type User = {
    id: number,
    name: string,
    lastname: string,
    birthday: string,
    phone: string,
    email: string,
    job: string,
    genre: string,
    amountSales: number,
}

export const useUsers = () => {

    // GET USER //
    async function getAllUsers() {
        const users: User[] = await api.get('/users')
            .then(res => res.data)
            .catch(error => toast.error(error.response.data.message))

        return users
    }

    return { getAllUsers }
}