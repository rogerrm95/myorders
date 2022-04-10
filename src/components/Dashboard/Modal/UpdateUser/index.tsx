import { useState } from "react";
import { useUsers } from "../../../../hooks/useUsers";
import { ButtonGroup, Form, XButton } from "./styles"; // Styles //
// Utils //
import { toast } from "react-toastify";
// Schema - Validação //
import { UpdateUserSchema } from './schema'
// Icones //
import { BiEraser } from "react-icons/bi";
import { FiCheck, FiX } from "react-icons/fi";
// Componentes //
import { Modal } from "..";
import { Button } from "../../../MyOrders/Button";
import { Input } from "../../Inputs/Input";
import { Radio } from "../../Inputs/Radio";
import { Spinner } from "../../../MyOrders/Spinner";
import { InputDate } from "../../Inputs/InputDate";

interface UpdateUserProps {
    id: string | number | undefined,
    onModalClose: (hasCloseModal: boolean) => void,
}

export function UpdateUserModal({ id, onModalClose }: UpdateUserProps) {
    const { updateUser } = useUsers()
    // Dados do usuário //
    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [genre, setGenre] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [job, setJob] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    async function handleSaveUserInfo() {
        setIsLoading(true)
        const fullName = name.split(' ') // Separa os nomes em um array //
        const firstName = fullName.shift() // Pega o primeiro item do array (nome) //
        const lastname = fullName.join(' ') // Pega o restante do array e junta numa string //

        const data = {
            id,
            name: firstName,
            lastname: lastname,
            birthday,
            genre,
            phone: phone ? phone : null,
            job,
            email,
            password
        }

        // Validação dos dados //
        await UpdateUserSchema.validate(data)
            .then(() => {
                updateUser(data).then(_ => {
                    setIsLoading(false)
                    onModalClose(false)
                })
            }).catch(err => {
                err.errors.map((error: string) => (
                    toast.warning(error)
                ))

                setIsLoading(false)
            })
    }

    function handleResetFields() {
        setName('')
        setEmail('')
    }

    function closeModal() {
        onModalClose(false)
    }

    return (
        <Modal title='Cadastrar novo item'>
            <Form action="submit">
                <Input label='Nome *'
                    placeholder='Ex: Rogério Marques'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div className='second-line'>
                    <InputDate
                        label="Data de Nascimento *"
                        placeholder="__/__/____"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)} />
                    <Radio
                        label='Status'
                        options={['Masculino', 'Feminino']}
                        value={genre}
                        onSelectChange={(e) => setGenre(e)}
                    />
                </div>
                <div className='third-line'>
                    <Input label='Telefone'
                        placeholder='(11) 9999-9999'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input label='Cargo *'
                        placeholder='Garçom'
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                    />
                </div>
                <Input label='E-mail *'
                    placeholder='Ex: roger@test.com.br'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input label='Senha'
                    placeholder='*************'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form>

            <ButtonGroup>
                <Button height={3} color='#FFF' backgroundColor='#6E787C' onClick={handleResetFields} disabled={isLoading}>
                    <span>Limpar</span>
                    <BiEraser size={20} />
                </Button>

                <Button height={3} color='#FFF' backgroundColor='#10A610' onClick={handleSaveUserInfo} disabled={isLoading}>
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