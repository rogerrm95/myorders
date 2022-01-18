import { createContext, ReactNode, useState } from 'react'
import { useOrders } from '../hooks/useOrders'
import { OrderType, ItemType } from '../types/Order'

interface StepContextProviderProps {
    children: ReactNode
}

interface StepContextData {
    order: Order,
    currentPage: number,
    loadOrderData: (id: string) => void,
    onNextPage: () => void,
    onPreviousPage: () => void,
    updateOrder: (item: ItemType[]) => void
}

type Order = Pick<OrderType, "items" | "client" | "desk" | "people" | "waiter">

export const StepContext = createContext<StepContextData>({} as StepContextData)

export function StepProvider({ children }: StepContextProviderProps) {
    const { getOrderById } = useOrders()
    const [order, setOrder] = useState({} as Order)
    const [currentPage, setCurrentPage] = useState(1)

    // Buscar o pedido pelo ID e salva no Contexto //
    async function loadOrderData(id: string) {
        const response = await getOrderById(id) as Order
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

    function updateOrder(item: ItemType[]) {
        setOrder({
            ...order,
            items: item
        })
    }

    return (
        <StepContext.Provider value={{ order, currentPage, onNextPage, onPreviousPage, loadOrderData, updateOrder }}>
            {
                children
            }
        </StepContext.Provider>
    )
}