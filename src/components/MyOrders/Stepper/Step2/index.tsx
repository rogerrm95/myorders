/* eslint-disable eqeqeq */
// Hook //
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useStepper } from "../../../../hooks/useStepper";
import { useUsers } from "../../../../hooks/useUsers";
import { useOrders } from "../../../../hooks/useOrders";
// Utils //
import { createBrowserHistory } from 'history'
import { CalculateValueTotal } from "../../../../utils/CalculateValueTotal";
import { toast } from 'react-toastify'
import { Step2Schema } from "./schema";
// Components //
import { Button } from "../../Button";
import { Input } from "../../Inputs/General";
import { SummaryList } from "../../SummaryList";
import { Select } from "../../Select";
// Icons //
import { FiCheck } from "react-icons/fi";
import UserIcon from '../../../../assets/icons/person.svg'
import DeskIcon from '../../../../assets/icons/desk.svg'
import NumberIcon from '../../../../assets/icons/number.svg'
import WaiterIcon from '../../../../assets/icons/waiter.svg'
// Styles //
import { Container } from './styles'

type UsersData = {
    id: number,
    name: string,
    lastname: string,
    job: string
}

export function Step2() {
    const { order } = useStepper()
    const { orders, newOrder, updateOrder, getOrders } = useOrders()
    const { getAllUsers } = useUsers()
    const { id }: any = useParams()
    const { push }: any = useHistory()
    
    const [client, setClient] = useState(order.client)
    const [desk, setDesk] = useState(order.desk)
    const [people, setPeople] = useState(order.people)
    const [waiter, setWaiter] = useState(order.waiter)
    const [users, setUsers] = useState([] as UsersData[])
    

    useEffect(() => {
        async function loadWaiters() {
            const data = await getAllUsers()
            setUsers(data)
        }

        loadWaiters()
    }, [getAllUsers])

    async function handleUpdateOrder() {
        const oldValue = CalculateValueTotal(order.items)
        const value = orders.filter(order => order.id == id && order).map(item => CalculateValueTotal(item.items))

        // Se não houver alterações nos itens do pedido, não irá mudar o status para Aguardando // 
        if (value[0] === oldValue) {
            toast.success(`Pedido atualizado!`, {
                draggable: true,
                position: 'top-right',
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
            })
            createBrowserHistory()
            push('/home')
            return
        }

        const orderData = {
            ...order,
            waiter,
            client,
            desk,
            people,
            status: 'Aguardando',
        }

        // Validação dos dados //
        await Step2Schema.validate({ ...orderData }, { abortEarly: false })
            .then(_ => {
                if (id) {
                    updateOrder(orderData, id)
                        .then(_ => {
                            toast.success(`Pedido atualizado! Nº ${id}`)
                            getOrders()
                            createBrowserHistory()
                            push('/home')
                        }).catch(error => toast.error("Não foi possível executar ação, tente novamente"))
                } else {
                    newOrder({ ...orderData, createdAt: String(new Date()) })
                        .then((res: any) => {
                            toast.success(`Pedido realizado! Nº ${res.id}`)
                            getOrders()
                            createBrowserHistory()
                            push('/home')
                        })
                        .catch(_ => toast.error('Não foi possível criar o pedido'))
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
                    type='number'
                    onChange={(e) => setDesk(Number(e.target.value))}
                    placeholder='Informar o Nº da mesa'
                    gridAreaName='desk' />
                <Input
                    label='Quantidade *'
                    imageSrc={NumberIcon}
                    value={order.people}
                    type='number'
                    onChange={(e) => setPeople(Number(e.target.value))}
                    placeholder='Informar o Nº de pessoas'
                    gridAreaName='qtdPeople' />
                <Select
                    options={users}
                    imageSrc={WaiterIcon}
                    gridAreaName='waiter'
                    value={waiter}
                    setWaiter={setWaiter} />
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