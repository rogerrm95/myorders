/* eslint-disable react-hooks/exhaustive-deps */
 // Hook //
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useStepper } from './../../../hooks/useStepper'
// Componentes //
import { Step1 } from './Step1' // Etapa 1 //
import { Step2 } from './Step2' // Etapa 2 //

export function Stepper() {
    const { currentPage, loadOrderData } = useStepper()
    const { id }: any = useParams()

    useEffect(() => {
        id && loadOrderData(id)
    }, [])

    return (
        <>
            {
                currentPage === 1 ? <Step1 /> : <Step2 />
            }
        </>
    )
}
