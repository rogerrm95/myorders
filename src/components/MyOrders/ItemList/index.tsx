import { FiTrash2 } from "react-icons/fi";
import { List, ListItem } from "./styles";

type ItemsListProps = {
    items: Item[],
    onRemoveItem: (id: number) => void
}

type Item = {
    name: string,
    anotation?: string,
    price: string,
    amount: number,
    isDone?: boolean
}

export function ItemList({ items, onRemoveItem }: ItemsListProps) {

    return (
        <List>
            <div>
                <h2>Descrição</h2>
                <h2>Preço</h2>
                <h2 className="actions-column">Ações</h2>
            </div>

            <ul>
                {
                    items && (
                        items.map((item, index) => (
                            <ListItem key={index} className={item.isDone ? 'done' : ''}>
                                <div>
                                    <p>{`Qtd: ${item.amount} - ${item.name}`}</p>
                                    <span>Obs: {`${item.anotation ? item.anotation : 'N/A'}`}</span>
                                </div>

                                <p>R$ {item.price}</p>

                                {
                                    !item.isDone && (
                                        <button className="actions-column" onClick={() => onRemoveItem(index)}>
                                            <FiTrash2 size='24' color="#E84A5F" />
                                        </button>
                                    )
                                }
                            </ListItem>
                        ))
                    )
                }
            </ul>
        </List>
    )
}