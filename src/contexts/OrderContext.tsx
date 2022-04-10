import { createContext, ReactNode, useState } from 'react'
import { useHistory } from "react-router";
import { uid } from 'uid/secure'
import { api } from '../services/api';
// Toastfy //
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Types //
import { OrderType as Order } from '../types/Order'

interface OrderContextProviderProps {
    children: ReactNode
}

interface OrderContextData {
    orders: Order[],
    deleteOrder: (id: string) => Promise<void>,
    getOrdersByStatus: (status: string) => Order[] | [],
    getOrderById: (id: string) => Promise<Order | undefined>,
    getOrders: () => Promise<void>,
    getOrdersByWaiter: (waiterRef: number) => Order[],
    newOrder: (order: any) => Promise<object>,
    updateOrder: (order: any, id: string) => Promise<void>
}

export const OrderContext = createContext<OrderContextData>({} as OrderContextData)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
    const { push } = useHistory()
    const [orders, setOrders] = useState<Order[]>([])

    // GET - PEDIDOS //
    async function getOrders() {
        const response: Order[] = await api.get('/orders')
            .then(res => res.data)
            .catch(error => toast.error(error.response.data.message))

        setOrders(response)
    }

    // GET - ORDER BY ID //
    async function getOrderById(id: string) {
        try {
            const data = orders.find(order => order.id === id && order)

            if (!data) {
                toast.error('Não foi possível localizar o pedido')
                push('/')
            }

            return data
        } catch (_) {
            toast.error('Não foi possível localizar o pedido')
        }
    }

    // GET - ORDER BY WAITER //
    function getOrdersByWaiter(waiterRef: number) {
        const ordersFiltered = orders.filter(order => order.waiter.id === +waiterRef)

        if (ordersFiltered.length === 0) return []

        const activeOrder = ordersFiltered.filter(order => !order.finishedAt)
        const finishedOrder = ordersFiltered.filter(order => order.finishedAt)

        return activeOrder.concat(finishedOrder)
    }

    // GET - ORDER BY STATUS //
    function getOrdersByStatus(status: string) {
        if (orders) {
            const list = orders.filter(order => order.status === status && order)

            return list
        }
        return []
    }

    // POST - ORDER //
    async function newOrder(order: Order) {
        const data = {
            ...order,
            id: `${order.desk}${uid(2)}`, // Número da mesa + 2 caracteres randomicos //
        }

        const response = await api.post('/orders', data)
            .then(res => res.data)
            .catch(error => toast.error(error.response.data.message))

        return response
    }

    // UPDATE - ORDER //
    async function updateOrder(order: any, id: string) {
        await api.patch(`/orders/${id}`, order)
            .then(_ => getOrders())
            .catch(error => toast.error(error.response.data.message))
    }

    // DELETE - ORDER //
    async function deleteOrder(id: string) {
        await api.delete(`/orders/${id}`)
            .then(res => {
                getOrders()
                console.log(res.data.message)
                //toast.success("Pedido Excluído")
            })
            .catch((error) => {
                return toast.error(error.response.data.message)
            })
    }

    return (
        <OrderContext.Provider
            value={{
                orders,
                deleteOrder,
                getOrdersByStatus,
                getOrderById,
                getOrders,
                getOrdersByWaiter,
                newOrder,
                updateOrder
            }}>
            {
                children
            }
        </OrderContext.Provider>
    )
}