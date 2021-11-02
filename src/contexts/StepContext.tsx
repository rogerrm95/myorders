import { createContext, ReactNode, useState } from 'react'
import { api } from '../services/api'

interface StepContextProviderProps {
    children: ReactNode
}

interface StepContextData {
    order: OrderData,
    currentPage: number,
    getOrderById: (id: number) => Promise<void>,
    onNextPage: () => void,
    onPreviousPage: () => void,
    updateOrder: (item: Item[]) => void
}

type OrderData = {
    items: Item[],
    client: string,
    desk: string
    people: string,
    waiter: string
}

type Item = {
    food: string,
    amount: number,
    anotation?: string,
    price: string
}

export const StepContext = createContext<StepContextData>({} as StepContextData)

export function StepProvider({ children }: StepContextProviderProps) {
    const [order, setOrder] = useState({} as OrderData)
    const [currentPage, setCurrentPage] = useState(1)

    // Buscar o pedido pelo ID e salva no Contexto //
    async function getOrderById(id: number) {
        const response = await api.get<OrderData>(`orders/${id}`)
            .then(res => res.data)

        setOrder(response)
    }

    // Avança uma página e salva as alterações //
    function onNextPage() {
        setCurrentPage(currentPage + 1)
    }

    // Retrocede para etapa anterior //
    function onPreviousPage() {
        setCurrentPage(currentPage - 1)
    }

    function updateOrder(item: Item[]){
        setOrder({
            ...order,
            items: item
        })
    }

    return (
        <StepContext.Provider value={{ order, currentPage, onNextPage, onPreviousPage, getOrderById, updateOrder }}>
            {
                children
            }
        </StepContext.Provider>
    )
}