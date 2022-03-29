import { Modal } from '..'
import { Container } from './styles'

interface DeleteFoodModalProps {
    onModalClose: (hasCloseModal: boolean) => void
}

export function DeleteFoodModal({ onModalClose }: DeleteFoodModalProps) {

    async function handleDeleteFood(){
        console.log("DELETANDO...")
        console.log("Criar Rota para deletar no back-end")
    }

    return (
        <Modal title='Excluir item'>
            <Container>
                <p>
                    Tem certeza que deseja excluir este item ?
                </p>

                <div>
                    <button className='btn-cancel' onClick={() => onModalClose(false)}>
                        Cancelar
                    </button>
                    <button className='btn-delete' onClick={handleDeleteFood}>
                        Excluir
                    </button>
                </div>
            </Container>
        </Modal>
    )
}