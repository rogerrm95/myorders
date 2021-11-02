import { useContext } from "react"
import { StepContext } from "../contexts/StepContext"

export const useStepper = () => {
    return useContext(StepContext)
}