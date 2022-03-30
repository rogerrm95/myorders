import { useState } from "react";
import { useFoods } from "../../../../hooks/useFoods";
import { ButtonGroup, Form, XButton } from "./styles"; // Styles //
// Utils //
import { category as categoryList } from '../../../../utils/categoryList'
import { toast } from "react-toastify";
// Schema - Validação //
import { NewFoodSchema } from './schema'
// Icones //
import { BiEraser } from "react-icons/bi";
import { FiCheck, FiX } from "react-icons/fi";
// Componentes //
import { Modal } from "..";
import { Button } from "../../../MyOrders/Button";
import { Input } from "../../Inputs/Input";
import { InputCash } from "../../Inputs/InputCash";
import { Radio } from "../../Inputs/Radio";
import { Select } from "../../Inputs/Select";
import { TextArea } from "../../Inputs/TextArea";
import { Spinner } from "../../../MyOrders/Spinner";

interface NewFoodModalProps {
    onModalClose: (hasCloseModal: boolean) => void,
}

export function NewFoodModal({ onModalClose }: NewFoodModalProps) {
    const {createNewFood} = useFoods()

    // Novo Item de Menu //
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [categorySelected, setCategorySelected] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    async function handleSaveItemOfMenu() {
        setIsLoading(true)
        const data = {
            id: '',
            name,
            price: price.replace('.', ','),
            category: categorySelected,
            description,
            isActive: status === 'Indisponível' ? false : true
        }

        console.log(price)

        const regexMoney = /(\d*)+(,\d{2})/g
        const isValidPrice = data.price.match(regexMoney)

        // Validação dos dados //
        if (!isValidPrice) {
            setIsLoading(false)
            return toast.error('Informe um valor válido 0,00')
        }

        // Validação dos dados //
        await NewFoodSchema.validate({...data, price})
            .then(async () => {
                // Enviando os dados para o back-end //
                createNewFood(data)
                    .then(() => {
                        handleResetFields()
                        closeModal()
                        setIsLoading(false)
                        toast.success('Produto adicionado')
                    }).catch((_) => toast.error("Erro inesperado, tente novamente"))
            }).catch(err => {
                err.errors.map((error: string) => (
                    toast.warning(error)
                ))
                setIsLoading(false)
            })
    }

    function handleResetFields() {
        setName('')
        setPrice('')
        setCategorySelected('')
        setDescription('')
        setStatus('')
    }

    function closeModal() {
        onModalClose(false)
    }

    return (
        <Modal title='Cadastrar novo item'>
            <Form action="submit">
                <Input label='Nome'
                    placeholder='Ex: Coxinha de frango...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div className='third-line'>
                    <InputCash
                        label='Preço'
                        placeholder="00,00"
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Radio
                        label='Status'
                        options={['Disponível', 'Indisponível']}
                        value={status}
                        onSelectChange={(e) => setStatus(e)}
                    />
                </div>
                <Select
                    label='Categorias'
                    options={categoryList}
                    value={categorySelected}
                    onSelectChange={(e) => setCategorySelected(e)}
                />
                <TextArea
                    label='Descrição'
                    hasMaxCaracters
                    maxLength={500}
                    placeholder='Descrição do item...'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form>

            <ButtonGroup>
                <Button height={3} color='#FFF' backgroundColor='#6E787C' onClick={handleResetFields} disabled={isLoading}>
                    <span>Limpar</span>
                    <BiEraser size={20} />
                </Button>

                <Button height={3} color='#FFF' backgroundColor='#10A610' onClick={handleSaveItemOfMenu} disabled={isLoading}>
                    {
                        isLoading ?
                            (
                                <Spinner size={8} color='#FFF' />
                            ) :
                            (
                                <>
                                    <span>Salvar</span>
                                    <FiCheck size={20} />
                                </>
                            )
                    }
                </Button>
            </ButtonGroup >

            <XButton className="x-button" onClick={closeModal}>
                <FiX size={28} />
            </XButton>
        </Modal >
    )
}