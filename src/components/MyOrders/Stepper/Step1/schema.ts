// YUP Validation //
import * as Yup from 'yup'

export const Step1Schema = Yup.object().shape({
    food: Yup.string().required("Informar um item!"),
    anotation: Yup.string(),
    amount: Yup.number().min(1, "Quantidade mínima: 1").required()
})