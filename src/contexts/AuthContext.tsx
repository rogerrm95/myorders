import { createContext, ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({})

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const { signIn, isLoading, user } = useAuth()

    return (
        <AuthContext.Provider value={{ signIn, user, isLoading }}>
            {
                children
            }
        </AuthContext.Provider>
    )
}