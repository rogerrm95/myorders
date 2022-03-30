import './styles'
import { Container } from './styles'

type SuggestionItemProps = {
    suggestion: {
        id: number | string,
        name: string,
        price: string,
        category: string
    },
    onClick?: () => void
}

export function SuggestionItem({ suggestion, onClick }: SuggestionItemProps) {
    return (
        <Container onClick={onClick}>
            <p className='food'>
                {suggestion.name}
            </p>

            <span className='category'>
                {suggestion.category}
            </span>

            <p className='price'>
                {`R$ ${suggestion.price}`}
            </p>
        </Container>
    )
}