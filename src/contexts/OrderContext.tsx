import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface OrderContextProviderProps {
    children: ReactNode
}

interface OrderContextData {
    orders: Order[]
}

type Order = {
    id: number,
    waiter: string,
    client: string,
    desk: number,
    price: string | number,
    people?: number,
    createdAt: string,
    finishedAt?: string,
    status: "done" | "preparing" | "waiting",
    itens: Item | []
}

type Item = {
    food: string,
    anotation: string,
    price: string,
    amount: number,
    isReady: boolean
}

export const OrderContext = createContext<OrderContextData>({} as OrderContextData)

export function OrderContextProvider({ children }: OrderContextProviderProps) {

    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        getOrders()
    }, [])

    async function getOrders() {
        const data = await api.get<Order[]>('/orders')
        .then(res => res.data)

        setOrders(data)
    }

    return (
        <OrderContext.Provider value={{ orders }}>
            {
                children
            }
        </OrderContext.Provider>
    )
}