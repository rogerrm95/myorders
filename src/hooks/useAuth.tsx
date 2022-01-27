import { useState } from "react"
import { useHistory } from 'react-router'
import { api } from "../services/api"

export const useAuth = () => {
    const { push } = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(() => {
        const data = localStorage.getItem('@my-orders')

        return data ? JSON.stringify(data) : {}
    })

    async function signIn(user: { email: string, password: string }) {
        setIsLoading(true)

        const data = await api.post('/authenticate', user)
            .then(res => res.data)

            api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
            localStorage.setItem('@my-orders', JSON.stringify(data))

        setUser(data)
        setIsLoading(false)
        push('/')
    }

    return { signIn, user, isLoading }
}