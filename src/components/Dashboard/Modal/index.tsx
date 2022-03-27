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
                <header>
                    <h2>
                        {
                            title
                        }
                    </h2>
                </header>

                <section>
                    {
                        children
                    }
                </section>
            </StyledModal>
        </Overlay>
    )
}