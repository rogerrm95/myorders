import { useState } from "react"
import { useHistory } from 'react-router'
import { toast } from "react-toastify"

import { api } from "../services/api"

export const useAuth = () => {
    const { replace } = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [isSigned, setIsSigned] = useState(false)
    const [user, setUser] = useState(() => {
        const data = localStorage.getItem('@my-orders')

        return data ? JSON.stringify(data) : {}
    })

    async function signIn(user: { email: string, password: string }) {
        setIsLoading(true)

        await api.post('/authenticate', user)
            .then(res => {
                api.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
                localStorage.setItem('@my-orders', JSON.stringify(res.data))
                setUser(res.data)
                setIsSigned(true)
                replace('/')
            })
            .catch(error => {
                toast.error(error.response.data.message)
            })
            .finally(() => setIsLoading(false))        
    }

    function signOut() {
        delete api.defaults.headers.common['Authorization']
        setIsSigned(false)
        
        const hasLocalStorageData = !!localStorage.getItem('@my-orders')
        hasLocalStorageData && localStorage.removeItem('@my-orders')

        replace('/login')
    }

    return { signIn, signOut, setIsSigned, user, isSigned, isLoading }
}