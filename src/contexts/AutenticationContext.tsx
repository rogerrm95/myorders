import { createContext, ReactNode, useState } from 'react'
import { useOrders } from '../hooks/useOrders'
import { OrderType, ItemType } from '../types/Order'

interface AutenticationContextProviderProps {
    children: ReactNode
}

interface AutenticationPropsData {
    //user: User,
    signIn: () => void,
    signOut: () => void
}


export const AutenticationContext = createContext<AutenticationPropsData>({} as AutenticationPropsData)

export function StepProvider({ children }: AutenticationContextProviderProps) {

    function signIn() { }

    function signOut() { }

    return (
        <AutenticationContext.Provider value={{ signIn, signOut }}>
            {
                children
            }
        </AutenticationContext.Provider>
    )
}