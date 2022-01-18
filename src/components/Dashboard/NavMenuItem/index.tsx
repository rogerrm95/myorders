import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
// Icons //
import { IconType } from 'react-icons'
// Styles //
import { Container } from './styles'

type NavMenuItemProps = {
    name: string,
    href: string,
    Icon: IconType,
    alt?: string
}

export function NavMenuItem({ name, href, Icon, alt = 'Ícone' }: NavMenuItemProps) {
    const { location } = useHistory()
    const [isActive, setIsActive] = useState(false)

    // Identifica o menu ativo //
    useEffect(() => {
        if(location.pathname === href) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [href, location.pathname])

    return (
        <Container to={href} className={isActive ? 'active' : ''} >
            <Icon size='24' />
            <p>{name}</p>
        </Container>
    )
}