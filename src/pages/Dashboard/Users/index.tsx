import { toast } from 'react-toastify'
import { Fragment, useEffect, useState } from 'react'
import { api } from '../../../services/api'
// Componentes //
import { InformationHeader } from '../../../components/Dashboard/InformationHeader'
import { Navbar } from '../../../components/Dashboard/Navbar'
import { NewFoodModal } from '../../../components/Dashboard/Modal/NewFood'
import { Spinner } from '../../../components/MyOrders/Spinner'
// Imagens //
import HeroImage from '../../../assets/user-hero-image.svg'
import { FiSkipForward } from 'react-icons/fi'
// Types //
import User from '../../../types/User'
// Styles //
import { Container, UserListStyled, UserInfoStyled, UserHistorySalesStyled } from './styles'
import CalculateAgeOfAnything from '../../../utils/CalculateAge'

interface UserProps extends User {
    age: string
}

export default function Users() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [userList, setUserList] = useState<User[]>([] as User[])
    const [activeUser, setActiveUser] = useState<UserProps | null>(null)
    // Dados do Usuário //


    useEffect(() => {
        loadUser()
    })

    async function loadUser() {
        const data = await api.get('/users')
            .then(res => {
                return res.data
            }).catch(error => {
                toast.error(error.response.data.message)
            })

        setUserList(data)
    }

    function handleLoadInfoOfUser(user: User) {
        const age = CalculateAgeOfAnything(user.birthday).toString()
        setActiveUser({ ...user, age })
    }

    function handleOpenModal() {
        setIsModalOpen(!isModalOpen)
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
                        <ul onClick={loadUser}>
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

                        <article>
                            <div className='user'>

                                {
                                /* <FaUserSlash size={72} color='#45545A' /> */
                                //Continuar//
                                }

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
                                        {activeUser && activeUser.amountSales}
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
                                            <tr>
                                                <td className='order'>235f</td>
                                                <td className='description'>
                                                    1 - Pizza de Calabresa + Queijo /
                                                    20 - Esfiha de queijo /
                                                    1 Suco de uva - 500ml /
                                                    1 Caipirinha de Maracuja - Voodka
                                                </td>
                                                <td className='date'>01/10/2021 <br /> ás 21:15</td>
                                                <td className='total'>R$ 89,50</td>
                                            </tr>
                                            <tr>
                                                <td className='order'>235f</td>
                                                <td className='description'>
                                                    1 - Pizza de Calabresa + Queijo /
                                                    20 - Esfiha de queijo /
                                                    1 Suco de uva - 500ml /
                                                    1 Caipirinha de Maracuja - Voodka
                                                </td>
                                                <td className='date'>01/10/2021 <br /> ás 21:15</td>
                                                <td className='total'>R$ 89,50</td>
                                            </tr>
                                            <tr>
                                                <td className='order'>235f</td>
                                                <td className='description'>
                                                    1 - Pizza de Calabresa + Queijo /
                                                    20 - Esfiha de queijo /
                                                    1 Suco de uva - 500ml /
                                                    1 Caipirinha de Maracuja - Voodka
                                                </td>
                                                <td className='date'>01/10/2021 <br /> ás 21:15</td>
                                                <td className='total'>R$ 89,50</td>
                                            </tr>
                                        </tbody>
                                    </UserHistorySalesStyled>
                                </div>
                            </div>
                        </article>
                    </UserInfoStyled>
                </section>

            </main>

            {
                isModalOpen && (
                    <NewFoodModal onModalClose={(e) => setIsModalOpen(e)} />
                )
            }

        </Container>
    )
}