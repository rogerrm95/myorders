import { Container } from "./styles";

type ItemsProps = {
    food: string,
    description: string,
    anotation?: string,
    amount: number,
    isDone?: boolean,
    onClick?: () => {}
}

export function OrderItems({ food, description, anotation, amount, isDone = true }: ItemsProps) {
    return (
        <Container>
            <div className='content'>
                <h2>Lasanha ao Fugo - Frango</h2>

                <p><strong>Descrição: </strong><br />
                    Lasanha ao fugo com massa artesanal,
                    preparada com molho branco,
                    frango desfiado temperado e carne moída.
                </p>

                <p>
                    <strong>Observação: </strong>
                    N/A
                </p>

                <span>Quantidade: 04</span>
            </div>

            <div className='buttons-group'>
                <button>Deletar item</button>
                <button>Confirmar</button>
            </div>
        </Container>
    )
}