import { useState } from "react";
import { useParams, useHistory } from "react-router";
import { createBrowserHistory } from 'history'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import { api } from "../../../../services/api";
// Hook //
import { useStepper } from "../../../../hooks/useStepper";
// Components //
import { Button } from "../../Button";
import { Input } from "../../Inputs/General";
import { SummaryList } from "../../SummaryList";
// Icons //
import { FiCheck } from "react-icons/fi";
import UserIcon from '../../../../assets/icons/person.svg'
import DeskIcon from '../../../../assets/icons/desk.svg'
import NumberIcon from '../../../../assets/icons/number.svg'
import WaiterIcon from '../../../../assets/icons/waiter.svg'
// Styles //
import { Container } from './styles'
import { Step2Schema } from "./schema";

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
            waiter,
            client,
            desk,
            people,
            status: 'waiting',
        }

        // Validação dos dados //
        await Step2Schema.validate({ ...updatedOrder }, { abortEarly: false })
            .then(_ => {
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
                            push('/home')
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
                            push('/home')
                        })
                }
            })
            .catch(err => {
                err.errors.map((error: string) => (
                    toast.warning(error)
                ))
            })
    }

    return (
        <Container>
            <form>
                <Input
                    label='Nome'
                    imageSrc={UserIcon}
                    value={order.client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder='Nome do cliente...'
                    gridAreaName='user' />
                <Input
                    label='Mesa'
                    imageSrc={DeskIcon}
                    value={order.desk}
                    onChange={(e) => setDesk(e.target.value)}
                    placeholder='Informar o Nº da mesa'
                    gridAreaName='desk' />
                <Input
                    label='Quantidade *'
                    imageSrc={NumberIcon}
                    value={order.people}
                    onChange={(e) => setPeople(e.target.value)}
                    placeholder='Informar o Nº de pessoas'
                    gridAreaName='qtdPeople' />
                <Input
                    label='Atendente'
                    imageSrc={WaiterIcon}
                    value={order.waiter}
                    onChange={(e) => setWaiter(e.target.value)}
                    placeholder='Selecionar um atendente...'
                    gridAreaName='waiter' />
            </form>

            <div>
                <SummaryList orders={order.items} />
            </div>

            <Button onClick={handleUpdateOrder} backgroundColor="#10A610">
                Finalizar pedido <FiCheck size={24} />
            </Button>
        </Container>
    )
}