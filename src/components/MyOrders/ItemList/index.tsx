import { FiTrash2 } from "react-icons/fi";
import { List, ListItem } from "./styles";

type Items = {
    food: string,
    anotation?: string,
    price: string,
    amount: number
}

type ItemsListProps = {
    items: Items[],
    onRemoveItem: (id: number) => void
}

export function ItemList({ items, onRemoveItem }: ItemsListProps) {
    return (
        <List>
            <div>
                <h2>Descrição</h2>
                <h2>Preço</h2>
                <h2>Ações</h2>
            </div>

            <ul>
                {
                    items && (
                        items.map((item, index) => (
                            <ListItem key={index}>
                                <div>
                                    <p>{`Qtd: ${item.amount} - ${item.food}`}</p>
                                    <span>Obs: {`${item.anotation ? item.anotation : 'N/A'}`}</span>
                                </div>

                                <p>R$ {item.price}</p>

                                <button onClick={() => onRemoveItem(index)}>
                                    <FiTrash2 size='24' color="#E84A5F" />
                                </button>
                            </ListItem>
                        ))
                    )
                }
            </ul>
        </List>
    )
}