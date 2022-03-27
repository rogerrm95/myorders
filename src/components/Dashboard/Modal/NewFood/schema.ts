// YUP Validation //
import * as Yup from 'yup'

export const NewFoodSchema = Yup.object().shape({
    name: Yup.string().required("Informar o nome do produto"),
    price: Yup.number().required("Informar o preço").typeError('Informar um preço'),
    category: Yup.string().required("Informar uma categoria"),
    description: Yup.string().required("Informar uma breve descrição")
})