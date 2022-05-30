import { toast } from 'react-toastify'
import { Fragment, useEffect, useState } from 'react'
// Hook //
import { useOrders } from '../../../hooks/useOrders'
import { useUsers } from '../../../hooks/useUsers'
// Componentes //
import { DeleteUserModal } from '../../../components/Dashboard/Modal/DeleteUser'
import { NewUserModal } from '../../../components/Dashboard/Modal/NewUser'
import { InformationHeader } from '../../../components/Dashboard/InformationHeader'
import { Navbar } from '../../../components/Dashboard/Navbar'
import { Spinner } from '../../../components/MyOrders/Spinner'
import { UpdateUserModal } from '../../../components/Dashboard/Modal/UpdateUser'
// Imagens //
import HeroImage from '../../../assets/user-hero-image.svg'
import { FiSkipForward } from 'react-icons/fi'
// Utils //
import { CalculateValueTotal } from '../../../utils/CalculateValueTotal'
import { SortArrayOfObjects } from '../../../utils/SortArray'
import CalculateAgeOfAnything from '../../../utils/CalculateAge'
import FormartHours from '../../../utils/FormartHours'
// Types //
import User from '../../../types/User'
// Styles //
import { Container, UserListStyled, UserInfoStyled, UserHistorySalesStyled } from './styles'

interface UserProps extends User {
    age: string,
    sales: Sales[]
}

type Sales = {
    id: string,
    description: string,
    total: string,
    date: DateProps | null
}

type DateProps = {
    dateFormated: string,
    hourFormated: string
}

export default function Users() {
    const { getOrdersByWaiter } = useOrders()
    const { getAllUsers } = useUsers()
    // Modais //
    const [isModalNewUserOpen, setIsModalNewUserOpen] = useState(false)
    const [isModalUpdateUserOpen, setIsModalUpdateUserOpen] = useState(false)
    const [isModalDeleteUserOpen, setIsModalDeleteUserOpen] = useState(false)
    // Dados do Usuário //
    const [userList, setUserList] = useState<User[]>([])
    const [activeUser, setActiveUser] = useState<UserProps | null>(null)

    useEffect(() => {
        async function loadUser() {
            await getAllUsers()
                .then(res => {
                    const formattedUserList = SortArrayOfObjects(res, 'name')
                    setUserList(formattedUserList)
                })
                .catch(error => toast.error(error.response.data.message))
        }

        loadUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Carregar os dados do usuário selecionado //
    async function handleLoadInfoOfUser(user: User) {
        const age = CalculateAgeOfAnything(user.birthday).toString()

        const orders = await getOrdersByWaiter(user.id)

        const sales = orders.map(order => {
            const id = order.id
            const total = CalculateValueTotal(order.items)

            const date = order.finishedAt ? FormartHours(new Date(order.finishedAt)) : null

            const description = order.items.map(order => {
                return order.name
            }).join(' / ')

            return {
                id, date, total, description
            }
        })

        setActiveUser({ ...user, age, sales })
    }

    // Exclui o usuário da lista //
    function handleDeleteUser(id: string | number) {
        const newList = userList.filter(user => user.id !== id)
        setUserList(newList)
    }

    // Adiciona um usuário a lista //
    function handleCreateUser(user: any) {
        const data = [...userList, user] as User[]
        const newList = SortArrayOfObjects(data, 'name')
        setUserList(newList)
    }

    // Atualiza os dados de um usuário //
    function handleUpdateUser(userUpdated: User) {
        const data = userList.map(user => user.id === userUpdated.id ? userUpdated : user)
        const newList = SortArrayOfObjects(data, 'name')
        setActiveUser(null)
        setUserList(newList)
    }

    return (
        <Container>

            <Navbar />

            <main>
                <InformationHeader
                    title='Gerenciamento de usuários'
                    description="Bem-vindo ao painel de gerenciamento de usuários,  nesta área você poderá cadastrar e alterar as informações de cada usuário,
                    ou exclui-lo da plataforma."
                    heroImage={HeroImage}
                />

                <section>
                    <UserListStyled>
                        <h2>Usuários</h2>
                        <ul>
                            {
                                userList ? (
                                    userList.map((user, index: number) => (
                                        <Fragment key={index}>
                                            <li onClick={() => handleLoadInfoOfUser(user)}>
                                                <p>{`${user.name} ${user.lastname}`}</p>
                                                <span>{user.job}</span>
                                                <button>
                                                    <FiSkipForward size={16} color='#FFF' />
                                                </button>
                                            </li>

                                            <hr />
                                        </Fragment>
                                    ))


                                ) : (
                                    <div className='loading'>
                                        <Spinner />
                                    </div>
                                )
                            }
                        </ul>

                    </UserListStyled>

                    <UserInfoStyled>
                        <h2>Perfil</h2>

                        <article className={`${!activeUser ? 'empty' : ''}`}>
                            <div className='user'>

                                <div className='user-info'>
                                    <span><strong>Nome:</strong>
                                        {activeUser && `${activeUser.name} ${activeUser.lastname}`}
                                    </span>
                                    <span><strong>Cargo:</strong>
                                        {activeUser && activeUser.job}
                                    </span>
                                    <span><strong>Data de Nascimento:</strong>
                                        {activeUser && activeUser.birthday}
                                    </span>
                                    <span><strong>Idade:</strong>
                                        {activeUser && activeUser.age}
                                    </span>
                                    <span><strong>Telefone:</strong>
                                        {activeUser && activeUser.phone}
                                    </span>
                                    <span><strong>E-mail:</strong>
                                        {activeUser && activeUser.email}
                                    </span>
                                    <span><strong>Sexo:</strong>
                                        {activeUser && activeUser.genre}
                                    </span>
                                    <span><strong>Total de Vendas:</strong>
                                        {activeUser && activeUser.sales.length}
                                    </span>
                                </div>

                            </div>

                            <div className='user-sales'>
                                <h2>Histórico de Vendas</h2>

                                <div style={{ overflowX: 'auto', height: '200px' }}>
                                    <UserHistorySalesStyled>
                                        <thead>
                                            <tr>
                                                <th>Pedido</th>
                                                <th>Descrição</th>
                                                <th>Data</th>
                                                <th>Valor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                activeUser?.sales.map((sale, index) => (
                                                    <tr key={index}>
                                                        <td className='order'>{sale.id}</td>
                                                        <td className='description'>{sale.description}</td>
                                                        <td className='date'>
                                                            {sale.date && `${sale.date?.dateFormated} \n ás ${sale.date?.hourFormated}`}
                                                        </td>
                                                        <td className='total'>R$ {sale.total}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </UserHistorySalesStyled>
                                </div>
                            </div>

                            <div className='user-actions'>
                                <button disabled={!activeUser ? true : false} onClick={() => setIsModalUpdateUserOpen(true)}>
                                    Editar
                                </button>
                                <button disabled={!activeUser ? true : false} onClick={() => setIsModalDeleteUserOpen(true)}>
                                    Excluir
                                </button>
                            </div>
                        </article>
                    </UserInfoStyled>
                </section>

                <button className='new-user-button' onClick={() => setIsModalNewUserOpen(true)}>
                    + Clique aqui para criar um novo usuário
                </button>

            </main>

            { // MODAIS //
                isModalUpdateUserOpen && (
                    <UpdateUserModal
                        id={activeUser?.id}
                        userSeleted={activeUser}
                        onUpdateUser={(user) => handleUpdateUser(user)}
                        onModalClose={(e) => setIsModalUpdateUserOpen(e)}
                    />
                )
            }

            {
                isModalNewUserOpen && (
                    <NewUserModal
                        onModalClose={(e) => setIsModalNewUserOpen(e)}
                        onCreateUser={(e) => handleCreateUser(e)}
                    />
                )
            }

            {
                isModalDeleteUserOpen && activeUser && (
                    <DeleteUserModal
                        id={activeUser.id}
                        onDelete={(user) => handleDeleteUser(user)}
                        onModalClose={(e) => setIsModalDeleteUserOpen(e)} />
                )
            }
        </Container>
    )
}