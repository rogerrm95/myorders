import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface OrderContextProviderProps {
    children: ReactNode
}

interface OrderContextData {
    orders: Order[],
    getOrdersByStatus: (status: string) => Order[],
    getOrders: () => Promise<void>
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
    status: "Pronto" | "Preparando" | "Aguardando" | "Encerrado",
    items: Item[] | []
}

type Item = {
    name: string,
    anotation: string,
    description: string,
    price: string,
    amount: number,
    isDone: boolean
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

    function getOrdersByStatus(status: string) {
        const list = orders.filter(order => order.status === status && order)
        
        return list
    }

    return (
        <OrderContext.Provider value={{ orders, getOrdersByStatus, getOrders }}>
            {
                children
            }
        </OrderContext.Provider>
    )
}