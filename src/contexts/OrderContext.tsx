import { createContext, ReactNode } from 'react'

interface OrderContextProviderProps {
    children: ReactNode
}

interface OrderContextData {
    waiter: string
}

export const OrderContext = createContext<OrderContextData>({} as OrderContextData)

export function OrderContextProvider ({ children }: OrderContextProviderProps) {
    const waiter = 'roger' // test //

    return (
        <OrderContext.Provider value={{waiter}}>
            {
                children
            }
        </OrderContext.Provider>
    )
}