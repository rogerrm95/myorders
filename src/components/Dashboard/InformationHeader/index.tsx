import { ReactNode } from 'react'

import { Container } from './styles' // Styles //

type InformationHeaderProps = {
    title: string,
    heroImage: string,
    children: ReactNode
}

export function InformationHeader({ title, heroImage, children }: InformationHeaderProps) {
    return (
        <Container>
            <div>
                <h1>{title}</h1>
                {
                    children
                }
            </div>
            <img src={heroImage} alt="Hero" />
        </Container>
    )
}