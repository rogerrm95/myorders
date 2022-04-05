import { useState } from 'react'
// Componentes //
import { InformationHeader } from '../../../components/Dashboard/InformationHeader'
import { Navbar } from '../../../components/Dashboard/Navbar'
// Imagens //
import HeroImage from '../../../assets/user-hero-image.svg'
import { Container, UserListStyled, UserInfoStyled, UserHistorySalesStyled } from './styles' // Styles //
import { NewFoodModal } from '../../../components/Dashboard/Modal/NewFood'
import { FiSkipForward } from 'react-icons/fi'
import { FaUserSlash } from 'react-icons/fa'

export default function Users() {
    const [isModalOpen, setIsModalOpen] = useState(false)

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

                        <ul>
                            <li>
                                <p>Amaury de Souza Junior</p>
                                <span>Cargo: Cozinheiro Jr</span>
                                <button>
                                    <FiSkipForward size={16} color='#FFF' />
                                </button>
                            </li>

                            <hr />

                            <li>
                                <p>Amaury de Souza</p>
                                <span>Cargo: Cozinheiro Pl</span>
                                <button>
                                    <FiSkipForward size={16} color='#FFF' />
                                </button>
                            </li>
                        </ul>
                    </UserListStyled>

                    <UserInfoStyled>
                        <h2>Perfil</h2>

                        <article>
                            <div className='user'>
                                <FaUserSlash size={72} color='#45545A' />

                                <div className='user-info'>
                                    <span><strong>Nome:</strong></span>
                                    <span><strong>Cargo:</strong></span>
                                    <span><strong>Data de Nascimento:</strong></span>
                                    <span><strong>Idade:</strong></span>
                                    <span><strong>Telefone:</strong></span>
                                    <span><strong>E-mail:</strong></span>
                                    <span><strong>Sexo:</strong></span>
                                    <span><strong>Total de Vendas:</strong></span>
                                </div>
                            </div>

                            <div className='user-sales'>
                                <h2>Histórico de Vendas</h2>

                                <UserHistorySalesStyled>
                                    <tr>
                                        <th>Pedido</th>
                                        <th>Descrição</th>
                                        <th>Data</th>
                                        <th>Valor</th>
                                    </tr>

                                    <tr>
                                        <td>235f</td>
                                        <td>
                                            1 - Pizza de Calabresa + Queijo / 
                                            20 - Esfiha de queijo / 
                                            1 Suco de uva - 500ml / 
                                            1 Caipirinha de Maracuja - Voodka
                                        </td>
                                        <td>01/10/2021 ás 21:15</td>
                                        <td>R$ 89,50</td>
                                    </tr>
                                </UserHistorySalesStyled>
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