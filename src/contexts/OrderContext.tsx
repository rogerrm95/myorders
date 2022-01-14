import { createContext, ReactNode, useEffect, useState } from 'react'
import { useHistory } from "react-router";
import { uid } from 'uid/secure'
// Toastfy //
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// FaunaDB //
import { query as q } from 'faunadb'
import { Fauna } from './../services/fauna'
// Types //
import { OrderType as Order } from '../types/Order'

interface OrderContextProviderProps {
    children: ReactNode
}

interface OrderContextData {
    orders: Order[],
    deleteOrder: (id: string) => Promise<void>,
    getOrdersByStatus: (status: string) => Order[],
    getOrderById: (id: string) => Promise<Order>,
    getOrders: () => Promise<void>,
    newOrder: (order: any) => Promise<object>,
    updateOrder: (order: any, id: string) => Promise<void>
}

export const OrderContext = createContext<OrderContextData>({} as OrderContextData)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
    const { push } = useHistory()

    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        getOrders()
    }, [])

    // GET - PEDIDOS //
    async function getOrders() {

        // GET - Pedidos //
        const response: Order[] = await Fauna.query<any>(
            q.Map(
                q.Paginate(
                    q.Match(
                        q.Index('all_orders')
                    )
                ),
                q.Lambda('ordersRef',
                    q.Get(
                        q.Var('ordersRef')
                    )
                )
            )
        ).then(res => res.data.map((item: any) => item.data))

        setOrders(response)
    }

    // GET - PEDIDOS POR ID//
    async function getOrderById(id: string) {
        try {
            const data = await Fauna.query<Order>(
                q.Get(
                    q.Match(
                        q.Index('order_by_id'), id
                    )
                )
            ).then((res: any) => res.data)

            return data
        } catch (_) {
            toast.error('Não foi possível localizar o pedido')
            push('/home')
        }
    }

    // DELETE - PEDIDO //
    async function deleteOrder(id: string) {
        const refOrder = await Fauna.query(
            q.Get(
                q.Match(
                    q.Index('order_by_id'), id
                )
            )
        ).then((res: any) => res.ref.value.id)

        await Fauna.query(
            q.Delete(
                q.Ref(q.Collection('orders'), refOrder)
            )
        ).then(_ => {
            getOrders()
            toast.success("Pedido Excluído")
        }).catch(() => {
            return toast.error("Não foi possível executar essa ação")
        })
    }

    // POST - PEDIDO //
    async function newOrder(order: Order) {
        const data = {
            ...order,
            id: `${order.desk}${uid(2)}`, // Número da mesa + 2 caracteres randomicos //
        }

        const response = await Fauna.query(
            q.Create(
                q.Collection('orders'),
                { data }
            )
        ).then(_ => data)

        return response
    }

    // UPDATE - PEDIDO //
    async function updateOrder(order: Order, id: string) {
        await Fauna.query(
            q.Update(
                q.Select("ref",
                    q.Get(
                        q.Match(
                            q.Index("order_by_id"), id
                        )
                    )
                ),
                {
                    data: { ...order }
                })
        )
    }

    function getOrdersByStatus(status: string) {
        getOrders()

        const list = orders.filter(order => order.status === status && order)

        return list
    }

    return (
        <OrderContext.Provider value={{ orders, deleteOrder, getOrdersByStatus, getOrderById, getOrders, newOrder, updateOrder }}>
            {
                children
            }
        </OrderContext.Provider>
    )
}