// Components //
import { OrderPage } from '../../../components/MyOrders/OrderPage'
import { Stepper } from '../../../components/MyOrders/Stepper'

export default function NewOrder() {
    return (
        <OrderPage title='Nova comanda'>
            <Stepper />
        </OrderPage>
    )
}