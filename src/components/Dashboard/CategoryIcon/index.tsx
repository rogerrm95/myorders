import { Container } from './styles'

type CategotyIconProps = {
    icon: string,
    label: string,
    isActive?: boolean,
    onSelect: (label: string) => void
}

export function CategoryIcon({ icon, label, isActive, onSelect }: CategotyIconProps) {
    return (
        <Container onClick={() => onSelect(label)}>
            <img src={icon} alt={label} />
            <p>
                {label}
            </p>
        </Container>
    )
}