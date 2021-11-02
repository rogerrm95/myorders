// Components //
import { useParams } from "react-router";
import { OrderPage } from "../../../components/MyOrders/OrderPage";
import { Stepper } from "../../../components/MyOrders/Stepper";

export default function EditOrder() {
    const { id }: any = useParams()

    return (
        <OrderPage title={`Pedido Nº ${id}`}>
            <Stepper />
        </OrderPage>
    )
}