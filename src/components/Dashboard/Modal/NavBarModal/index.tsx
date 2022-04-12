import { useState } from 'react'
import { Navbar } from '../../Navbar'
import { Overlay, Modal } from './styles'

export function NavBarModal() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Overlay>
            <Modal>
                <Navbar />
            </Modal>
        </Overlay>
    )
}