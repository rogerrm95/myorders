import { ReactNode } from 'react'
import { Overlay, Modal as StyledModal } from './styles'

interface ModalProps {
    children: ReactNode,
    title: string
}
// Modal - Estrutura //
export function Modal({ children, title }: ModalProps) {
    return (
        <Overlay>
            <StyledModal>
                <header className='modal-header'>
                    <h2>
                        {
                            title
                        }
                    </h2>
                </header>

                <section className='modal-section'>
                    {
                        children
                    }
                </section>
            </StyledModal>
        </Overlay>
    )
}