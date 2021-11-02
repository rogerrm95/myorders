import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useStepper } from './../../../hooks/useStepper' // Hook //

import { Step1 } from './Step1' // Etapa 1 //
import { Step2 } from './Step2'

export function Stepper() {
    const { currentPage, getOrderById } = useStepper()
    const { id }: any = useParams()

    useEffect(() => {
        id && getOrderById(id)
    }, [])

    return (
        <>
            {
                currentPage === 1 ? (<Step1 />) : <Step2/>
            }
        </>
    )
}
