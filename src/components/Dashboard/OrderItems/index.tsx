import { FiCheck } from "react-icons/fi";
import { Container } from "./styles";

type ItemsProps = {
    name: string,
    description: string,
    anotation?: string,
    amount: number,
    isDone: boolean,
    onDeleteClick?: () => void,
    onFinishClick?: () => void,
}

export function OrderItems({ name, description, anotation, amount, isDone, onDeleteClick, onFinishClick }: ItemsProps) {
    return (
        <Container className={isDone ? "finished" : ''}>
            <div className='box'>
                <h2>{name}</h2>

                <p><strong>Descrição: </strong><br />
                    {description}
                </p>

                <p>
                    <strong>Observação: </strong>
                    {anotation ? anotation : "N/A"}
                </p>

                <span>Quantidade: {amount}</span>
            </div>

            <div className='buttons-group'>
                {
                    isDone ? (
                        <>
                            <button disabled>
                                Item finalizado
                                <FiCheck size='20' />
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={onDeleteClick}>Deletar item</button>
                            <button onClick={onFinishClick}>Confirmar</button>
                        </>
                    )
                }
            </div>
        </Container>
    )
}