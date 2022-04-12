import { Container } from './styles' // Styles //

type InformationHeaderProps = {
    title: string,
    description: string,
    heroImage: string,
}

export function InformationHeader({ title, heroImage, description }: InformationHeaderProps) {
    return (
        <Container className='information-header'>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={heroImage} alt="Hero" />
        </Container>
    )
}