import { ReactNode, useState } from 'react'
import { Overlay, Modal as StyledModal } from './styles'

interface ModalProps {
    children: ReactNode,
    title: string
}

export function Modal({ children, title }: ModalProps) {

    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }


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