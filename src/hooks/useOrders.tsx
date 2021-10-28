import { useContext } from "react"
import { OrderContext } from "../contexts/OrderContext"

export const useOrders = () => {
    return useContext(OrderContext)
}