import { Box, Card, IconBox, Labels } from './styles'

type ItemMenuProps = {
    image: string,
    path: string,
    title: string,
    legend: string,
    icon: string
}
export function ItemMenu({ image, path, title, legend, icon }: ItemMenuProps) {
    return (
        <Box href={path}>
            <Card>
                <img src={image} alt={title} />
            </Card>

            <Labels>
                <h2>{title}</h2>
                <p>{legend}</p>
            </Labels>

            <IconBox>
                <img src={icon} alt={legend} />
            </IconBox>
        </Box>
    )
}