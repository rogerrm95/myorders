import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
    email: Yup.string().required("Informe seu e-mail").email('E-mail inválido'),
    password: Yup.string().required('Informe sua senha')
})