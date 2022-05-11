import { useState } from 'react'
import { toast } from 'react-toastify'
import { Spinner } from '../../../MyOrders/Spinner'
// Hook //
import { useUsers } from '../../../../hooks/useUsers'
// Styles //
import { Modal } from '..'
import { Container } from './styles'

interface DeleteUserModalProps {
    id: number,
    onDelete: (id: number | string) => void,
    onModalClose: (hasCloseModal: boolean) => void,
}

export function DeleteUserModal({ id, onModalClose, onDelete }: DeleteUserModalProps) {
    const { deleteUser } = useUsers()

    const [isLoading, setIsLoading] = useState(false)

    async function handleDeleteUser(id:number) {
        setIsLoading(true)

        await deleteUser(id)
            .then(_ => {
                setIsLoading(false)
                onModalClose(false)
                onDelete(id)
            })
            .catch(_ => {
                setIsLoading(false)
                toast.error('Não foi possível excluir o usuário !')
            })
    }

    return (
        <Modal title='Excluir usuário'>
            <Container>
                <p>
                    Tem certeza que deseja excluir este usuário ?
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
                                <button className='btn-delete' onClick={() => handleDeleteUser(id)}>
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