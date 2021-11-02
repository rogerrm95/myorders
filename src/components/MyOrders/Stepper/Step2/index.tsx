import { useState } from "react";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserHistory } from 'history'
// Hook //
import { useStepper } from "../../../../hooks/useStepper";
// Components //
import { Input } from "../../Inputs/General";
import { SummaryList } from "../../SummaryList";
// Icons //
import UserIcon from '../../../../assets/icons/person.svg'
import DeskIcon from '../../../../assets/icons/desk.svg'
import NumberIcon from '../../../../assets/icons/number.svg'
import WaiterIcon from '../../../../assets/icons/waiter.svg'
// Styles //
import { Container } from './styles'
import { api } from "../../../../services/api";
import { useParams, useHistory } from "react-router";


export function Step2() {
    const { order } = useStepper()
    const { id }: any = useParams()
    const { push } = useHistory()

    const [client, setClient] = useState(order.client)
    const [desk, setDesk] = useState(order.desk)
    const [people, setPeople] = useState(order.people)
    const [waiter, setWaiter] = useState(order.waiter)

    async function handleUpdateOrder() {
        const updatedOrder = {
            ...order,
            client,
            desk,
            people,
            waiter,
            status: 'waiting',
        }


        if (id) {
            api.put(`orders/${id}`, updatedOrder)
                .then(_ => {
                    toast.success(`Pedido atualizado!`, {
                        draggable: true,
                        position: 'top-right',
                        autoClose: 4000,
                        closeOnClick: true,
                        pauseOnHover: false,
                    })
                    createBrowserHistory()
                    push('/orders')
                })
        } else {
            api.post('orders/', { ...updatedOrder, createdAt: new Date() })
                .then(res => {
                    toast.success(`Pedido realizado! Nº ${res.data.id}`, {
                        draggable: true,
                        position: 'top-right',
                        autoClose: 4000,
                        closeOnClick: true,
                        pauseOnHover: false,
                    })
                    createBrowserHistory()
                    push('/orders')
                })
        }
    }

    return (
        <Container>
            <form>
                <Input
                    label='Nome'
                    imageSrc={UserIcon}
                    value={order.client}
                    onChange={(e) => setClient(e.target.value)}
                    gridAreaName='user' />
                <Input
                    label='Mesa'
                    imageSrc={DeskIcon}
                    value={order.desk}
                    onChange={(e) => setDesk(e.target.value)}
                    gridAreaName='desk' />
                <Input
                    label='Quantidade'
                    imageSrc={NumberIcon}
                    value={order.people}
                    onChange={(e) => setPeople(e.target.value)}
                    gridAreaName='qtdPeople' />
                <Input
                    label='Atendente'
                    imageSrc={WaiterIcon}
                    value={order.waiter}
                    onChange={(e) => setWaiter(e.target.value)}
                    gridAreaName='waiter' />
            </form>

            <div>
                <SummaryList orders={order.items} />
            </div>

            <button onClick={handleUpdateOrder}>
                Enviar
            </button>
        </Container>
    )
}