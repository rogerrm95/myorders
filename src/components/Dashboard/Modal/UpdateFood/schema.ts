// YUP Validation //
import * as Yup from 'yup'

export const UpdateFoodSchema = Yup.object().shape({
    name: Yup.string().required("Informar o nome do produto"),
    category: Yup.string().required("Informar uma categoria"),
    description: Yup.string().required("Informar uma breve descrição")
})