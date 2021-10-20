// Components //
import { Button } from '../../components/Button'
import { Input } from '../../components/Inputs/General'
import { OrderPage } from '../../components/OrderPage'

// Images //
import { FiChevronRight, FiPlus, FiTrash2 } from 'react-icons/fi'
import FoodInService from './../../assets/icons/plate-in-service.svg'
import Note from './../../assets/icons/note.svg'
import Number from './../../assets/icons/number.svg'

import { Box, List, ListItem, Summary } from './styles'

export default function NewOrder() {
    return (
        <OrderPage title='Nova comanda'>
            <Box>
                <form>
                    <Input imageSrc={FoodInService} gridAreaName="food" placeholder="Selecione os pratos ou bebidas..." />

                    <Input
                        imageSrc={Note}
                        gridAreaName="obs"
                        label="Observação"
                        type='text'
                        placeholder="Ex: Retirar cebolha, sem sal e etc... " />

                    <Input
                        imageSrc={Number}
                        gridAreaName="unit"
                        label="Quantidade"
                        type='number'
                        placeholder="01" />

                    <Button backgroundColor="#10A610" height={3.5}>
                        Adicionar <FiPlus size={16} color="#FFF" />
                    </Button>
                </form>

                <Summary>
                    <h2>Pedido</h2>
                    <h2>Total: R$ 0,00</h2>
                </Summary>

                <List>
                    <div>
                        <h2>Descrição</h2>
                        <h2>Preço</h2>
                        <h2>Ações</h2>
                    </div>

                    <ul>
                        <ListItem>
                            <div>
                                <p>02 - Lasanha ao fugo - Molho especial da casa</p>
                                <span>Obs: Molho normal</span>
                            </div>

                            <p>R$ 45,00</p>

                            <button>
                                <FiTrash2 size='24' color="#E84A5F" />
                            </button>
                        </ListItem>

                        <ListItem>
                            <div>
                                <p>03 - Caipirinhas de Maracujá - Saquê</p>
                                <span>Obs: N/A</span>
                            </div>

                            <p>R$ 105,00</p>

                            <button>
                                <FiTrash2 size='24' color="#E84A5F" />
                            </button>
                        </ListItem>

                        <ListItem>
                            <div>
                                <p>01 - Garrafa de vinho Provolone</p>
                                <span>Obs: N/A</span>
                            </div>

                            <p>R$ 250,00</p>

                            <button>
                                <FiTrash2 size='24' color="#E84A5F" />
                            </button>
                        </ListItem>
                    </ul>
                </List>

                <div>
                    <Button backgroundColor='#C4C4C4'>
                        <FiTrash2 size={20} />
                        Limpar
                    </Button>
                    <Button backgroundColor='#4C8BEA'>
                        Próximo
                        <FiChevronRight size={24} />
                    </Button>
                </div>
            </Box>
        </OrderPage>
    )
}