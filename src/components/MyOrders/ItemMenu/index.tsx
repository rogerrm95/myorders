import { AnchorHTMLAttributes } from "react";
import { Box, IconBox, Labels } from './styles'

interface ItemMenuProps extends AnchorHTMLAttributes<HTMLAnchorElement>  {
    path?: string,
    title: string,
    legend: string,
    icon: string
}
export function ItemMenu({ path, title, legend, icon, ...rest }: ItemMenuProps) {
    return (
        <Box href={path} {...rest}>
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