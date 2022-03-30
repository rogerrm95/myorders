import { useState } from 'react'
import { toast } from 'react-toastify'
import { Modal } from '..'
import { useFoods } from '../../../../hooks/useFoods'
import { Spinner } from '../../../MyOrders/Spinner'
import { Container } from './styles'

interface DeleteFoodModalProps {
    id: string | number,
    onModalClose: (hasCloseModal: boolean) => void,
}

export function DeleteFoodModal({ id, onModalClose }: DeleteFoodModalProps) {
    const { deleteFood } = useFoods()

    const [isLoading, setIsLoading] = useState(false)

    async function handleDeleteFood(id: number | string) {
        setIsLoading(true)

        await deleteFood(id)
            .then(_ => {
                setIsLoading(false)
                onModalClose(false)
                toast.success('Item deletado !')
            })
            .catch(_ => {
                setIsLoading(false)
                toast.error('Não foi possível excluir o item !')
            })
    }

    return (
        <Modal title='Excluir item'>
            <Container>
                <p>
                    Tem certeza que deseja excluir este item ?
                </p>

                <div>
                    {
                        isLoading ? (
                            <Spinner size={12} color='#E84A5F'/>
                        ) : (
                            <>
                                <button className='btn-cancel' onClick={() => onModalClose(false)}>
                                    Cancelar
                                </button>
                                <button className='btn-delete' onClick={() => handleDeleteFood(id)}>
                                    Excluir
                                </button>
                            </>
                        )
                    }
                </div>
            </Container>
        </Modal>
    )
}