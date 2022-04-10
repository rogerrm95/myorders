// YUP Validation //
import * as Yup from 'yup'

export const NewUserSchema = Yup.object().shape({
    name: Yup.string().required("Informar o nome do usuário"),
    birthday: Yup.string()
        .required("Informar data de nascimento")
        .matches(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/, 'Data inválida: XX/XX/XXXX'),
    phone: Yup.string().max(10, "Número máximo permitido: 10").nullable(),
    job: Yup.string().required("Informar um cargo"),
    email: Yup.string().required('Informar um e-mail').email('Informar um e-mail válido'),
    password: Yup.string().required('Informar uma senha')
})