/* eslint-disable eqeqeq */
// Hook //
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useStepper } from "../../../../hooks/useStepper";
import { useUsers } from "../../../../hooks/useUsers";
import { useOrders } from "../../../../hooks/useOrders";
// Utils //
import { createBrowserHistory } from 'history'
import { toast } from 'react-toastify'
import { Step2Schema } from "./schema";
// Components //
import { Button } from "../../Button";
import { Input } from "../../Inputs/General";
import { SummaryList } from "../../SummaryList";
import { Select } from "../../Select";
import { Spinner } from "../../Spinner";
// Icons //
import { FiCheck } from "react-icons/fi";
import UserIcon from '../../../../assets/icons/person.svg'
import DeskIcon from '../../../../assets/icons/desk.svg'
import NumberIcon from '../../../../assets/icons/number.svg'
import WaiterIcon from '../../../../assets/icons/waiter.svg'
// Types //
import User from "../../../../types/User";
// Styles //
import { Container } from './styles'

export function Step2() {
    const { order } = useStepper()
    const { newOrder, updateOrder } = useOrders()
    const { getAllUsers } = useUsers()
    const { id }: any = useParams()
    const { push }: any = useHistory()

    const [client, setClient] = useState(order.client)
    const [desk, setDesk] = useState(order.desk)
    const [people, setPeople] = useState(order.people)
    const [waiter, setWaiter] = useState(order.waiter)
    const [userList, setUserList] = useState([] as User[])
    const [isLoading, setIsLoading] = useState(false)

    // Carregar os atentendes //
    useEffect(() => {
        async function loadWaiters() {
            const data = await getAllUsers()
            setUserList(data)
        }

        loadWaiters()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function handleUpdateOrder() {
        setIsLoading(true)
        const isEverythingDone = order.items.filter(item => !item.isDone && item)

        // Se não houver alterações nos itens do pedido, não irá mudar o status para Aguardando // 
        if (isEverythingDone.length === 0) {
            const data = {
                ...order,
                waiter,
                client,
                desk,
                people,
            }

            updateOrder(data, id)
                .then(_ => {
                    toast.success(`Pedido atualizado! Nº ${id}`)
                    setIsLoading(false)
                    createBrowserHistory()
                    push('/')
                })
                .catch(error => toast.error("Não foi possível executar ação, tente novamente - 1"))

            return
        }

        const data = {
            ...order,
            waiter: {
                ...waiter,
                id: +waiter.id
            },
            client,
            desk,
            people,
            status: 'Aguardando'
        }

        // Validação dos dados //
        await Step2Schema.validate({ ...data }, { abortEarly: false })
            .then(_ => {
                if (id) {
                    updateOrder(data, id)
                        .then(_ => {
                            toast.success(`Pedido atualizado! Nº ${id}`)
                            setIsLoading(false)
                            createBrowserHistory()
                            push('/')
                        }).catch(error => toast.error("Não foi possível executar ação, tente novamente - 1"))
                } else {
                    newOrder({ ...data, createdAt: String(new Date()) })
                        .then((res: any) => {
                            toast.success(`Pedido realizado! Nº ${res.data.id}`)
                            setIsLoading(false)
                            createBrowserHistory()
                            push('/')
                        })
                        .catch(_ => toast.error('Não foi possível executar ação, tente novamente - 2'))
                }
            })
            .catch(err => {
                setIsLoading(false)
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
                    onChange={(e) => setDesk(parseInt(e.target.value))}
                    placeholder='Informar o Nº da mesa'
                    gridAreaName='desk' />
                <Input
                    label='Quantidade *'
                    imageSrc={NumberIcon}
                    value={order.people}
                    type='number'
                    onChange={(e) => setPeople(2)}
                    placeholder='Informar o Nº de pessoas'
                    gridAreaName='qtdPeople' />
                <Select
                    options={userList}
                    imageSrc={WaiterIcon}
                    gridAreaName='waiter'
                    value={waiter}
                    onSelectChange={setWaiter} />
            </form>

            <div>
                <SummaryList orders={order.items} />
            </div>

            <Button onClick={handleUpdateOrder} backgroundColor="#10A610">
                {
                    isLoading ? (
                        <Spinner size={8} color='#FFF' speed={0.5} />
                    ) : (
                        <>
                            Finalizar pedido <FiCheck size={24} />
                        </>
                    )
                }
            </Button>
        </Container>
    )
}