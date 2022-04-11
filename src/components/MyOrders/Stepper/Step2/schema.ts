// YUP Validation //
import * as Yup from 'yup'

export const Step2Schema = Yup.object().shape({
    client: Yup.string().required("Informar o nome do cliente"),
    desk: Yup.number().min(1, "Quantidade mínima: 1").required('Informar o Nº da mesa'),
    people: Yup.number().min(1, "Quantidade mínima: 1").required('Informar o Nº de pessoas na mesa'),
    waiter: Yup.object({
        id: Yup.number().required(),
        name: Yup.string().required("Informar um atendente")
    }).required('Informar o atendente responsável'),
    items: Yup.array().min(1, "Informar pelo menos 1 item no pedido")
})