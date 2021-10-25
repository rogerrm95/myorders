import { IconType } from 'react-icons'

import { Container } from './styles'

import { } from 'react-icons/'

type NavMenuItemProps = {
    name: string,
    href: string,
    Icon: IconType,
    alt?: string
}

export function NavMenuItem({ name, href, Icon, alt = 'Ícone' }: NavMenuItemProps) {
    return (
        <Container to={href}>
            <Icon size='24' />
            <p>{name}</p>
        </Container>
    )
}