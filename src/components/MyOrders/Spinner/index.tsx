import { ClockLoader  } from 'react-spinners'
import {} from 'react-spinners/interfaces'
import {Container} from './styles'

interface SpinnerProps {
    text?: string,
    color?: string,
    size?: number,
    speed?: number,
}

export function Spinner({ text, color = "#45545a", size = 16, speed = 1 }: SpinnerProps) {
    return (
        <Container>
            <ClockLoader size={size} speedMultiplier={speed} color={color}/>
            {
                text && <p>{text}</p>
            }
        </Container>
    )
}